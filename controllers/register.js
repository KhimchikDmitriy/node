import User from "../models/user.js";
const form = (req, res) => {
  res.render("registerForm", {});
};

const submit = (req, res, next) => {
  User.findByEmail(req.body.dataForm.email, (err, user) => {
    if (!user) {
      User.create(req.body.user, (err) => {
        if (err) return next(err);
      });
    }
  });
  res.error("Такой пользователь уже существует!");
  res.redirect("/");
};

export default { form, submit };
