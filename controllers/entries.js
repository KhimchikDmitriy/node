import Entry from "../models/entry";

const list = (req, res) => {
  Entry.selectAll((err, entries) => {
    if (err) return next(err);
    res.render("entries", { title: "List", entries: entries });
  });

  res.render("main", { title: "chepokrashka" });
  console.log("...");
  console.log("заход на /");
};

const form = (req, res, next) => {
  res.render("post", { title: "Post" });
};

const submit = (req, res, next) => {
  try {
    const username = req.user ? req.user.username : null;
    const data = req.body.entry;

    const entry = {
      username: username,
      title: data.title,
      content: data.content,
    };
    Entry.create(entry);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
};

export default { list, form, submit };
