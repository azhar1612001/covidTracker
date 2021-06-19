const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8000;

app.post("/",(req,res)=>{
    console.log(req.body);
    res.status(200).send("hello from server");
});

/*
app.post('/carrers', (req, res) => {
    upload(req, res, function(err) {
        if (err) {
            console.log(err)
            return res.render("carrers", { error: "Something went wrong!" });
        } else {
            name = req.body.name
            email = req.body.email
            phone = req.body.phone
            field = req.body.field
            message = req.body.message
            filepath = req.file.path

            // console.log(name)
            // console.log(email)
            // console.log(phone)
            // console.log(field)
            // console.log(message)
            // console.log(req.file)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GMAILID,
                    pass: process.env.GMAILPASS
                }
            });

            var mailOptions = {
                from: process.env.GMAILID,
                to: `${process.env.GMAILID}, ${email}`,
                subject: "Visited to Dignity Carrer",
                text: `
                name:${name}
                email:${email}
                phone:${phone}
                field:${field}
                message:${message}`,
                attachments: [{
                    path: filepath
                }]
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                    return res.render("carrers", { error: "Something went wrong!" });
                } else {
                    console.log('Email sent: ' + info.response);
                    fs.unlink(filepath, function(err) {
                        if (err) {
                            return res.end(err)
                        } else {
                            console.log("deleted")
                            return res.render("carrers", { success: "Message has been sent" });
                        }
                    })
                }
            });
        }
    })
});


app.get("/", (req, res) => {
    res.render("index");
});
*/

app.listen(port, () => {
    console.log("lisening at ", port);
});