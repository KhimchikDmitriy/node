const list = (req, res) => {
  res.render("login", { title: "chepokrashka" });
  console.log("...");
  console.log("заход на /login");
};

export default { list };
