const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const key = require("./enb");
const passport = require('passport')

const google = require('./google')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretKey.secretKey;

module.exports = passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );


//Gracias Agos

const GOOGLE_CLIENT_ID = google.google.client_id
const GOOGLE_CLIENT_SECRET = google.google.client_secret

passport.use(new GoogleStrategy({
  //first param: options
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/user/google/redirect"
  },
  //second param: cb function
  function(accessToken, refreshToken, profile, done) {
    // check if user already exists
    User.findOne({googleID: profile.id})
    
    .then((currentUser) => {
        if (currentUser) {
          return done (null, currentUser); // already have this user, done
        } else { 
          //it doesn't exist, create it first, then done.
            new User({
                googleID: profile.id,
                username: profile.displayName,
                password: "",
                avatarPath: profile.photos[0].value,
                email: "",
                firstName: profile.givenName,
                lastName: profile.familyName,
                country: "",
                favItins: []
            })
            .save()
            .then((newUser) => {
                done(null, newUser)
              }
            );
        }
    })
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});