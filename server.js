const express = require("express")
const app = express()

app.get("/", () => {
    return "Hello, world!"
})

app.listen(3000)