const express = require('express');
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');

// instantiate an express app
const app = express();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', //replace with your email provider
  port: 587,
  auth: {
    user: 'lauramars85@gmail.com',
    pass: '123abc',
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

app.post('/send', (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    console.log(data);
    const mail = {
      sender: `${data.name} <${data.email}>`,
      to: 'lauramars85@gmail.com',
      text: `${data.name} <${data.email}> \n${data.message}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Something went wrong.');
      } else {
        res.status(200).send('Email successfully sent to recipient!');
      }
    });
  });
});

//make the contact page the the first page on the app
app.route('/').get(function (req, res) {
  res.sendFile(process.cwd() + '/public/contact.html');
});

//port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
