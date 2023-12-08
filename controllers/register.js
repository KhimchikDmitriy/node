import User from "../models/user.js";

const form = (req, res) => {
  res.render("registerForm", { title: "Register" });
  console.log("...");
  console.log("заход на /register");
};
const submit = (req, res, next) => {
  User.findByEmail(req.body.email, (err, user) => {
    if (err) return next(err);
    if (!user) {
      User.create(req.body, (err) => {
        if (err) return next(err);
      });
    } else {
      console.log("Такой пользователь уже существует!");
    }
  });
  res.redirect("/");
  // res.redirect(req.protocol + "://" + req.get("host") + "/");
  // res.redirect(req.protocol + "://" + req.get("host"));
};

export default { form, submit };
