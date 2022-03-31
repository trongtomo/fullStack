let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};
let getAboutPage = (req, res) => {
  return res.render("about.ejs");
};
// obj= key:value
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
