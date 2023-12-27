const mongooose = require("mongoose")

const userSchema = new mongooose.Schema({
    username : String,
    email : String,
    password : String
})

const user = mongooose.model("user",userSchema)
module.exports = user