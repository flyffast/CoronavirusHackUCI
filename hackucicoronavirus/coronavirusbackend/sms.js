

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);
const numbers = ['+14084426432', '+19498387613', '+15103611639']
client.messages
    .create({
        from: '+13073171019',
        to: numbers[0],
        body: 'Welcome to Coronawatchers!' + "List of options: \"#1\" for number Corona Virus Cases in US;" +
        " \"#2\" for link to CDC info;" + 
        " \"#3\" for link to WHO Twitter;" +
        " \"#4\" - \"#9\" for a surprise;"
    })
    .then(message => console.log(message.sid));
