const { user } = require("../db/models");
const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

let opts = {};
opts.jwtFromRequest = extractJWT.fromHeader("secret_token");
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(
  new jwtStrategy(opts, function (jwt_payload, done) {
    user
      .findOne({
        attributes: ["id", "first_name", "last_name", "email"],
        where: {
          id: jwt_payload.id_user,
        },
      })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  })
);
