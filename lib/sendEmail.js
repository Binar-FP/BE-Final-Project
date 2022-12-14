const nodemailer = require("nodemailer")
const dotenv = require('dotenv');

dotenv.config();


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
    auth: {
      user: "admin@flywithme-api.me",
      pass: "otmejdsnaypexgbn",
    },
  });
  const sendMail = (mail) => {
    console.log(mail)
    const options = {
      from: '"Fly With Me" <no-reply@gmail.com>',
      to: mail.EMAIL,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    };
    // eslint-disable-next-line no-unused-vars
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.error(err);
      }else{
        console.log("email")
      }
    });
  };

  module.exports = {
    sendMail
  };