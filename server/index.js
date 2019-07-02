const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const massive = require('massive');
require ('dotenv').config();
const session = require('express-session');
const cors = require('cors')
const pizzaController = require('./controllers/pizzaController')
const galleryController = require('./controllers/galleryController')
const ordersController = require('./controllers/ordersController')
// const stripe = require("stripe")("pk_test_bMyfHqeaAIaSHGXqYhc9sm4P009rRQDsPl");
const uuid = require("uuid/v4");

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false}))





app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 1
    }
}))






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



//Pizza

app.post('/api/pizza', pizzaController.create);
app.get('/api/pizza', pizzaController.getAll);
app.get('/api/pizza/:id', pizzaController.getOne);
app.put('/api/pizza/:id', pizzaController.update);
app.delete('/api/pizza/:id', pizzaController.delete);

//Orders



app.post('/api/orders', ordersController.create);
app.get('/api/orders', ordersController.getAll);
app.get('/api/orders/:id', ordersController.getOne);
app.put('/api/orders/:id', ordersController.update);
app.delete('/api/orders/:id', ordersController.delete);



//gallery

app.post('/api/gallery', galleryController.create)
app.get('/api/gallery', galleryController.getAll)

// Stripe Checkout
app.post("/api/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  });




// app.post('/api/products', auth.usersOnly, products_controller.create);
// app.get('/api/products', auth.usersOnly, products_controller.getAll);
// app.get('/api/products/:id', auth.usersOnly, products_controller.getOne);
// app.delete('/api/products/:id', auth.usersOnly, products_controller.delete);
// app.put('/api/products/:id', auth.usersOnly,  products_controller.update)


app.listen(5050, () => {
    console.log(`Listening on port 5050`)
})