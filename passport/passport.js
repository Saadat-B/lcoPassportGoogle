const passport = require("passport");

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
      console.log("MY PROFILE", profile);
      next();
    }
  )
);
