const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user.schema");

const signup = async (req, res) => {
    const { username, email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            let finddata = await user.findOne({ email })
            if (!finddata) {
                let data = await user.create({
                    username: username,
                    email: email,
                    password: hash
                })
                let token = jwt.sign({ id: data._id }, "token")
                res.cookie("token", token).send(data)
            }
            else {
                res.send("already exits")
            }
        })
    }
    catch (error) {
        res.send({ error: "invalid data" })
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    let data = await user.findOne({ email });
    if (data) {
        bcrypt.compare(password, data.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ id: data._id}, "token");
                res.cookie("token", token).send({ msg: "User login successfully" });
            } else {
                res.send({ msg: "Password incorrect" });
            }
        });
    } else {
        res.send({ msg: "User not found" });
    }
}

module.exports = {login, signup };