const getfeeld = (req, feeld) => {
  let value = req.body(feeld);
  return value;
};
function parseFeeld(feeld) {
  return feeld.split(/\[|\]/).filter((s) => s);
}
const validate = (feeld) => {
  feeld = parseFeeld(feeld);
  return (req, res, next) => {
    if (getfeeld(req, feeld)) {
      next();
    } else {
      res.error("Invalid feeld");
      res.redirect("back");
    }
  };
};
const validateSimbol = (feeld, les) => {
  feeld = parseFeeld(feeld);
  return (req, res, next) => {
    if (getfeeld(req, feeld).length > les) {
      next();
    } else {
      res.error("Invalid feeld length");
      res.redirect("back");
    }
  };
};
export default { validate, validateSimbol };
