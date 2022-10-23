function index(req, res) {
  const posts = "post controller";

  res.send(posts);
}

module.exports = {
  index,
};
