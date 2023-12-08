import User from "../models/user.js";

const form = (req, res) => {
  res.render("registerForm", { title: "Register" });
};
const submit = (req, res, next) => {
  User.findByEmail(req.body.email, (err, user) => {
    if (err) return next(err);
    if (!user) {
      User.create(req.body.user, (err) => {
        if (err) return next(err);
      });
    } else {
      console.log("Такой пользователь уже существует!");
    }
  });
  res.redirect("/");
};

export default { form, submit };
