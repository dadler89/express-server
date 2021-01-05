//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello World!!<h1>")
})

app.get("/contact", (req, res) => {
  res.send("Contact me at: dadler@gmail.com")
})

app.get("/about", (req, res) => {
  res.send("Hello I am Dadler here are a few things about me:I love Hockey, My dachshunds names are Ovie and Doobie!")
})

app.get("/hobbies", (req, res) => {
  res.send("<ul><li>Hockey</li><li>Wiener Dogs</li></ul>")
})

app.listen(3000, () => {
  console.log("Andre Listenin on Port 3000")
});