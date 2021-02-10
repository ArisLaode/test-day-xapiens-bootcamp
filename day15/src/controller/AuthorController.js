"use strict";
const path = require("path");
const setRedis = require("../helpers/setRedis");
const Queue = require("bull");
const QueueMQ = require("bullmq");
const { setQueues, BullMQadapter, BullAdapter } = require("bull-board");
const { author } = require("../db/models");
const baseResponse = require("../helpers/response");
const { response } = require("express");
var cloudinary = require("cloudinary").v2;

class AuthorController {
  static async getAllDatas(req, res, next) {
    try {
      const payload = await author.findAll();
      setRedis(req, payload);
      baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (err) {
      res.status(422);
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const payload = await author.findByPk(req.params.id);
      baseResponse({ message: "authors retrieved", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async createAuthor(req, res, next) {
    // seq.
    try {
      const payload = await author.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      });
      setRedis();
      baseResponse({ message: "authors created", data: payload })(res);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    try {
      const authorDetails = await author.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
        },
        { where: { id: req.params.id } }
      );
      if (!authorDetails) {
        baseResponse({ message: "author not found", data: authorDetails })(
          res,
          404
        );
      }
      setRedis();
      baseResponse({ message: "author updated", data: authorDetails })(
        res,
        200
      );
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async deleteAuthors(req, res, next) {
    try {
      const datas = await author.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (datas) {
        baseResponse({ message: "author deleted", data: datas })(res, 200);
      }
      baseResponse({ message: "author not found", data: datas })(res, 404);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }

  static async uploadPhoto(req, res, next) {
    try {
      let path = "public/upload/authors/";
      let fileName = req.file.filename;
      let resultPathFileName = path + fileName;
      // const datas = await author.update(
      //   {
      //     photo: resultPathFileName,
      //   },
      //   { where: { id: req.params.id } }
      // );
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });

      const img = await cloudinary.uploader.upload(
        fileName,
        function (error, result) {
          console.log(result, error);
        }
      );

      const data = await author.update({
        photo: fileName,
      });
      // data.save().then((data) => {
      //   response.message = "Data berhasil disimpan";
      //   response.data = img;
      //   res.status(201).json(response);
      // });
    } catch (error) {
      res.status(400);
      next(err);
    }
    return baseResponse({ message: "photo upload succes" })(data, 200);
  }

  static async uploadImage(req, res) {
    // var filename = __dirname +'/'+ req.file;
    let filename = req.file.filename;
    // console.log(filename)
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
    const img = await cloudinary.uploader.upload(
      filename,
      function (error, result) {
        console.log(result, error);
      }
    );

    const { body } = req;

    const data = await author.build(body);
    data
      .save()
      .then((data) => {
        response.message = "Data berhasil disimpan";
        response.data = img;
        res.status(201).json(response);
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        res.status(400).json(response);
      });
  }
}

module.exports = AuthorController;
