const mailgun = require('mailgun-js')

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})

const sendWelcomeEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'halfbloodprine1@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    mg.messages().send({
        to: email,
        from: 'halfbloodprine1@gmail.com',
        subject: 'See you later buddy, serving you was a pleasure.',
        text: `Sorry to see you leaving, ${name}. If there's any feedback about why you're leaving us please let us know.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}