const nodemailer = require('nodemailer');
const core = require('@actions/core');
let RES_LINT      = core.getInput('RES_LINT')
let RES_TEST      = core.getInput('RES_TEST')
let RES_UPDATE    = core.getInput('RES__UPDATE')
let RES_DEPLOY    = core.getInput('RES_DEPLOY')
let GMAIL_PASS    = core.getInput('GMAIL_PASS')
let EMAIL_NOTIF   = core.getInput('EMAIL_NOTIF')


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hachemico@gmail.com',
    pass: GMAIL_PASS // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'hachemico@gmail.com',
  to: EMAIL_NOTIF,
  subject: 'Resultado del Workflow ejecutado',
  html: `<div>
            <h4> Se ha realizado un push en la rama main, que ha provocado la ejecución del workflow con los siguientes resultados:</h4>
            <h5> JOB Linter       : ${RES_LINT}   </h5>
            <h5> JOB Tests        : ${RES_TEST}   </h5>
            <h5> JOB Update Readme: ${RES_UPDATE} </h5>
            <h5> JOB Deploy Vercel: ${RES_DEPLOY} </h5>
        </div>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});