

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);
const numbers = ['+14084426432']
for (i = 0; i < numbers.length; i++)
    client.messages
        .create({
            from: '+13073171019',
            to: numbers[i],
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?'
        })
        
        .then(message => console.log(message.sid));