const passport = require("passport");
const User = require("../model/user");

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "147053614689-6g39grqum8l313imdon4shmn0t481ofu.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, next) => {
      console.log("MY PROFILE", profile._json.email);

      User.findOne({ email: profile._json.email }).then((user) => {
        if (user) {
          console.log("User already exists in DB", user);
          next(null, user);
        } else {
          User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile._json.email,
          })
            .then((user) => {
              console.log("New User", user);
              next(null, user);
            })
            .catch((err) => console.log(err));
        }
      });
      //   next();
    }
  )
);
