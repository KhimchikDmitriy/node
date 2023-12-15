import User from "../models/user.js";

const form = (req, res) => {
  res.render("login", { title: "chepokrashka" });
  console.log("...");
  console.log("заход на /login");
};
const submit = (req, res, next) => {
  User.authenticate(req.body.loginForm, (err, data) => {
    //data is user
    if (err) return next(err);
    if (data) {
      req.session.email = data.email;
      req.session.name = data.name;
      req.session.password = data.password;
      res.redirect("/");
    }
    if (!data) {
      console.log("...");
      console.log("Имя или пароль не верны!");
      res.redirect("back");
    }
  });
};
const logout = (req, res, err, next) => {
  req.session.destroy((req, res, err, next) => {
    if (err) return next(err);
  });
};
export default { form, submit, logout };
