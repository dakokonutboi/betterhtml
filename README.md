# betterhtml

betterhtml is a JS library that allows developers to build html documents as JS objects and then build them to real html

## Documentation

### class Element()

```js
Element(name, content, attributes)
```

#### Attributes

Element is a betterhtml class. It is built as an html element with opening and closing tags. It has three parameters : name / content / attributes.
The name of a betterhtml Element is the name of the html element, for example : h1, p, div ...
The content of a betterhtml Element is comparable to the innerHTML attribute of a html element. The content can be either a string in the case of an element that doesn't contain other elements or an array if the element itself contains other elements.
The attributes of a betterhtml Element are the attributes that are going to be built with the html, for example : style, src, onclick...

#### Methods

```js
render()
```

The render method builds the element to a normal html element, it takes no arguments.

```js
push(element)
```

The push method of a betterhtml element adds a new element to the content of the element

```js
querySelectorAll(query)
```

The querySelectorAll method of a betterhtml element returns all of the elements inside of the element's content that respect the query. 

```js
querySelector(query)
```

The querySelector method of a betterhtml element returns the first element inside of the element's content that respect the query. 

### class Ball(name, attributes)

```js
Ball()
```

#### Attributes

Element is a betterhtml class. It is built as an html element with only opening tags. It has two parameters : name / attributes.
The name of a betterhtml Ball is the name of the html element, for example : link, br, meta ...
The attributes of a betterhtml Ball are the attributes that are going to be built with the html, for example : name, src, content...

#### Methods

```js
render()
```

The render method builds the element to a normal html element, it takes no arguments.

## Example

```js
const Element = require("betterhtml").Element
const Ball = require("betterhtml").Ball

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

```

Gives the result

```html
<html >
<head >
<title >This is a test page!</title>
</head>
<body >
<h1 >This is a test heading!</h1>
<div id="content" class="contentor" >
<h2 >This is a smaller heading inside of a div</h2>
<p >This is a paragraph inside of a div</p>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="250px" >
</div>
</body>
</html>
```
