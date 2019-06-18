const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const massive = require('massive');
require ('dotenv').config();
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h2>Contact Details</h2>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
            <h2>Message</h2>
            <p>${req.body.message}</p>
            `

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user:'afton15@ethereal.email',
                pass: 'WAhceY3YgE6Z5GUVE5'
            }
        })
        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'afton15@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err)
            }
            console.log('Message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
           
        })
    })  
    res.sendStatus(200)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})


app.listen(5050, () => {
    console.log(`Listening on port 5050`)
})