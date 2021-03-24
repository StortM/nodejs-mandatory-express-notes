// Deadline: Wednesday 24th of March
// Mads Kjærgaard Christensen - KEA Datamatiker - Fullstack Node.js (Spring 2021)

const express = require("express")
const app = express()
const port = process.env.PORT || 8080

// Tell express where static content is located
app.use(express.static(__dirname + "/public"))

app.get("/notes/nodejs", (req, res) => {
    res.sendFile(__dirname + "/public/html/notes/nodejs.html")
})

app.get("/notes/express", (req, res) => {
    res.sendFile(__dirname + "/public/html/notes/express.html")
})

app.get("/notes/javascript", (req, res) => {
    res.sendFile(__dirname + "/public/html/notes/javascript.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
})

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Express listening at", Number(port))
    }
})
