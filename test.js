const Element = require("./index").Element
const Ball = require("./index").Ball

let html = new Element("html")
html.push(new Element("head"))
html.push(new Element("body"))
html.querySelector("head").push(new Element("title", "This is a test page!"))
html.querySelector("body").push(new Element("h1", "This is a test heading!"))
html.querySelector("body").push(new Element("div", [], {id: "content", class: "contentor"}))
html.querySelector("body").querySelector("#content").push(new Element("h2", "This is a smaller heading inside of a div"))
html.querySelector("body").querySelector("#content").push(new Element("p", "This is a paragraph inside of a div"))
html.querySelector("body").querySelector("#content").push(new Ball("img", {src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", width: "250px"}))
console.log(html.render())