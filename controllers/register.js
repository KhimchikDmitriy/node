import User from "../models/user.js";
const form = (req, res) => {
  res.render("registerForm", {});
};
const submit = (req, res, next) => {
  User.create(req.body.user, cb);
};

export default { form, submit };
