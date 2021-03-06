const redis = require("redis");
const client = redis.createClient();

client.on("error", function (error) {
  console.log(error);
});

const setRedis = (req, payload) => {
  try {
    client.get(req.originalUrl, (err, reply) => {
      if (reply) {
        throw new Error("double key");
      } else {
        client.setex(req.originalUrl, 3600, JSON.stringify(payload));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = setRedis;
