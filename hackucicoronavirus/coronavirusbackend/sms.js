const accountSid = 'AC2e81d4f331e58ffc2f409854f5b982f8';
const authToken = 'db27932e51926ecb1b8f89fde9e73d6e';
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        body: 'Hack UCI 2020 Coronaronaoronarona Virus',
        from: '+17275652791',
        to: '+14084426432'
    })

.then(message => console.log(message.side));