//const etsyData = document.getElementById("entry-template").innerHTML;
//const template = Handlebars.compile(data);

//const compiledTemplate = Handlebars.compile("entry-template");

import data from "./items.js";

function generateHTML(data) {
  //
  const source = document.querySelector("#entry-template").innerHTML;
  const template = Handlebars.compile(source);
  const html = template(data);

  document.querySelector(".etsy-list").insertAdjacentHTML("afterbegin", html);
}

generateHTML(data);
