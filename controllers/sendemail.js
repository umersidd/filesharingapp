const File = require('../models/uploadfile')
const nodemailer = require('nodemailer')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const res = require('express/lib/response')


const sendemail = async (req,res) =>{
    //console.log(req.body)
    const { uuid, emailto, emailFrom } = req.body

    if (!uuid || !emailto || !emailFrom){
        res.status(422).send('email ya uuid dalo')
    }

    const file = await File.findOne({ uuid: uuid })
    if (file.sender){
        res.status(422).send('email ja chuki  hai')
    }
    file.sender = emailFrom
    file.receiver = emailto
    const response = await file.save()

    mailkro({
        from: emailFrom,
        to: emailto,
        subject:'in share file sharing',
        text:`${emailFrom} shared a file with you`,
        html: require('../controllers/emailTemplate')({
            emailFrom: emailFrom,
            downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
            size: parseInt(file.size/1000) + ' KB',
            expires: '24 hours'
        })
    })
    
    return res.send('check kro email')
}

async function mailkro ({from, to, subject, text, html}){
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
let info = await transporter.sendMail({
    from: `inShare <${from}>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
});
}

module.exports = sendemail