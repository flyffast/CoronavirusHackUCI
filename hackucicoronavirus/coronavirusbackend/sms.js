

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        
        from: '+13073171019',
        to: '+14084426432',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?'
    })
    
    .then(message => console.log(message.sid));