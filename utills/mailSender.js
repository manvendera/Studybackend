const nodemialer = require('nodemailer')

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemialer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
        let info = await transporter.sendMail({
            from: 'StudyNoation || Code By Owner', // sender address
            to: `${email}`, // list of receivers
            subject: `${title}`, // Subject line
            text: `${body}`, // plain text body
            html: `<p>Your HTLM text : ${body}</p>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = mailSender