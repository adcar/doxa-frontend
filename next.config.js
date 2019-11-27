const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
/* Without CSS Modules, with PostCSS */
module.exports = withImages(withCSS());
