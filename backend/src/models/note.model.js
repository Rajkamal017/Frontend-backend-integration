const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("title-notes",noteSchema)

module.exports = noteModel