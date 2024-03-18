import { Strategy as VKStrategy } from "passport-vkontakte";
import logger from "../logger/index.js";
import "dotenv/config.js";

function passportFunctionVK(passport) {
  passport.serializeUser(function (user, done) {
    const newUser = {};
    newUser.id = user.id;
    newUser.email = user.emails[0].value;
    newUser.name = user.diasplayName;
    newUser.age = user.birthday ? date.now() - user.birthday : 0;
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(
    new VKStrategy(
      {
        clientID: process.env.VK_CLIENT_ID,
        clientSecret: process.env.VK_CLIENT_SECRET,
        callbackURL: "http://localhost:80/auth/vkontakte/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
          // To keep the example simple, the user's Yandex profile is returned
          // to represent the logged-in user.  In a typical application, you would
          // want to associate the Yandex account with a user record in your
          // database, and return that user instead.
          console.log("...");
          console.log("...");
          console.log("...");
          console.log("Полчили профиль от vk");
          logger.info("Получили профиль от vk.");
          return done(null, profile);
        });
      }
    )
  );
}

export default passportFunctionVK;
