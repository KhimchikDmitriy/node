import User from "../models/user.js";
import validatePassword from "../middleware/passwordValidation.js";
import validator from "validator";

const form = (req, res) => {
  res.render("registerForm", {
    title: "Регистрация",
    errorMessage: res.locals.errorMessage,
  });
  console.log("...");
  console.log("заход на /register");
};

const submit = [
  validatePassword,
  (req, res, next) => {
    const email = req.body.email;
    if (
      !validator.isEmail(email) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      res.locals.errorMessage.push("Проверьте правильность написания email.");
      return form(req, res);
    }

    if (res.locals.errorMessage && res.locals.errorMessage.length > 0) {
      return form(req, res);
    }

    User.findByEmail(email, (err, user) => {
      if (err) return next(err);
      if (!user) {
        User.create(req.body, (err) => {
          if (err) return next(err);
          res.redirect("/login");
          console.log("...");
          console.log("произведена регестрация");
        });
      } else {
        console.log("! ! !");
        console.log("! ! !");
        console.log("! ! !");
        console.log("ошибка ");
        console.log("! ! !");
        console.log("! ! !");
        res.locals.errorMessage.push("Такой пользователь уже существует!");
        console.log("Такой пользователь уже существует");
        return form(req, res);
      }
    });
  },
];

export default { form, submit };
