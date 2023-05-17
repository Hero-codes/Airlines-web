const bcrypt = require("bcryptjs")
const User = require("../models/User.js")

const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5)
        const newUser = new User({
            ...req.body,
            password: hash
        })

        await newUser.save();
        res.status(201).send("User has been created")
    } catch (error) {
        res.status(500).send(error.message);
    };
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(404).send("Email not registered");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).send("Wrong Credentials!");

        const { password, ...info } = user._doc
        res.status(200).send(info);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports = { register, login }