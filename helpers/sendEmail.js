const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "taskpro2023@meta.ua",
    pass: META_PASSWORD,
  },
});

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "taskpro2023@meta.ua", // sender address
    // from: "oleg.kovtun447@gmail.com", // sender address
    // to: "bar@example.com, baz@example.com", // list of receivers
    // subject: "Hello ✔", // Subject line
    // html: "<b>Hello world?</b>", // html body
  };
  // await sgMail.send(email);
  await transporter.sendMail(email);

  return true;
};

module.exports = { sendEmail };
