const express = require("express")
const { dirname } = require("path")

var app = express()
var port = 3001

app.get("/about", function (req, res, next){
    console.log("==Request Received")
    console.log(" -- req.url", req.url)
    console.log(" -- req.method", req.method)

    var content = "<html>"
    content += "<body>"
    content += "<h1>About</h1>"
    content += "</body>"
    content += "</html>"

    res.status(200).send(content)
})
app.get("/", function (req, res, next){
    console.log("==Request Received")
    console.log(" -- req.url", req.url)
    console.log(" -- req.method", req.method)

    res.status(200).sendFile(__dirname + "/public/index.html")
})