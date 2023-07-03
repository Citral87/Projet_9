module.exports = {
    content: ["index.html", "assets/scripts.js"],
    css: ["assets/bootstrap/bootstrap.min.css"],
    safelist: ['gallery'],
    output: "assets/dist",
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  };
  