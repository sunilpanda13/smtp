const express = require("express");
const transporter = require("../config/mail.config");
const route = express.Router();

route.post("/mail", (req, res) => {
    const mail = req.body;
    const mailData = {
        from : "test@gmail.com",
        to : mail.to,
        subject : mail.subject,
        html : mail.html,
    };

    transporter.sendMail(mailData, (err, info) => {
        if(err) {
            res.status(500).json({
                message : "Error sending mail",
                error : err,
            });
            console.log(err);
        } else {
            res.status(200).json({
                message : "Mail sent successfully",
                info : info,
            });
            console.log(info);
        }
    });
});

module.exports = route;