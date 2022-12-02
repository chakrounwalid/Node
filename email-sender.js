var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'test2209199@gmail.com',
    pass: 'HelloNode147852369'
  }
});

var mailOptions = {
  from: 'test2209199@gmail.com',
  to: 'walid@gescow.com.tn',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});