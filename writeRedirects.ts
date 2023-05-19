// Script create _redirects file for deploy on netlify
// File help do redirect or start web-app on url '/somethink'

let fs = require("fs");

fs.writeFile(
  "./build/_redirects",
  "/*       /index.html   200",
  function (err) {
    if (err) return console.log(err);

    console.log("The file _redirects is saved!");
  }
);
