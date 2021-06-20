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

app.post("/",async (req,res)=>{
    //console.log(req.body);
    const { name, email, phone, message } = req.body;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
        res.status(401).send({error:"All fields sholud be filled properly and whitespace not allowed"});
    } else if (phone.length!=10) {
        res.status(401).send({error:"Phone number should be of length 10"});
    } else {

        try {

            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.GMAILID,
                    pass: process.env.GMAILPASS,
                },
            });

            let info = await transporter.sendMail({
                from: process.env.GMAILID,
                to: `${email} , ${process.env.GMAILID}`,
                subject: "Visited to ARTeam",
                text: `
                name: ${name}
                email: ${email}
                phone: ${phone}
                message: ${message}`,
            });

            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            res.status(200).send({message:"Mail sent successfully"});

        } catch (err) {
            console.log(err);
            res.status(401).send({ error: "Something went wrong" });
        }
    }
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