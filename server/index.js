const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const massive = require('massive');
require ('dotenv').config();
const session = require('express-session');
const authController = require('./controllers/authController')
const products_controller = require("./controllers/products_controller")
const cors = require('cors')
const auth = require('./middleware/authMiddleware')

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: false,
//     resave: true
    
// }))



app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login)
app.get('/auth/logout', authController.logout)


app.get('')

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
                user:'hattie.fay@ethereal.email',
                pass: 'VuzGSA3fDxDHv3UNNb'
            }
        })
        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'hattie.fay@ethereal.email',
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
    res.sendtatus(200)
})


massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})










app.post('/api/products', auth.usersOnly, products_controller.create);
app.get('/api/products', auth.usersOnly, products_controller.getAll);
app.get('/api/products/:id', auth.usersOnly, products_controller.getOne);
app.delete('/api/products/:id', auth.usersOnly, products_controller.delete);
app.put('/api/products/:id', auth.usersOnly,  products_controller.update)


app.listen(5050, () => {
    console.log(`Listening on port 5050`)
})