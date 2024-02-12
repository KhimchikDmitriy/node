import logger from "../logger/index.js";
import User from "../models/user.js";

const form = (req, res) => {
  res.render("login", { title: "Login" });
  console.log("...");
  console.log("заход на /login");
};
const submit = (req, res, next) => {
  User.authenticate(req.body.loginForm, (err, data) => {
    //data is user
    if (err) return next(err);
    if (!data) {
      console.log("! ! !");
      console.log("! ! !");
      console.log("! ! !");
      console.log("Имя или пароль неверны!");
      console.log("! ! !");
      console.log("! ! !");
      logger.error("Ошибка ввода пароля");
      return form(req, res);
    }
    if (data) {
      req.session.email = data.email;
      req.session.name = data.name;
      req.session.password = data.password;
      req.session.role = data.role;
      console.log("...");
      console.log("Всё верно!");
      console.log("...");
      logger.info("Заход произведён" + " " + data.name + " " + data.email);
      res.redirect("/");
    }
  });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("! ! !");
      console.log("! ! !");
      console.log("! ! !");
      console.log("ошибка ");
      console.log("! ! !");
      console.log("! ! !");
      logger.error("Ошибка выхода");
      console.log(err.message);
    }
    return res.redirect("/");
  });
};

export default { form, submit, logout };
