const { Schema, model } = require("mongoose")

const student = Schema({
    firstName: String,
    lastName: String,
    email: String
})

module.exports = model('Student', student)