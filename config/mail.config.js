const nodemailer = require("nodemailer");
const { password, email } = require("./env.config");

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
        user: email,
        pass: password,
    },
});

module.exports = transporter;