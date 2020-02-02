

require('dotenv').config();

const accountSid = 'ACf176416553631042bf17042fa4a1fa3f';
const authToken = 'f7ea90368f780208216f9c0fb116e51d';
const client = require('twilio')(accountSid, authToken);
const numbers = ['+14084426432', '+19498387613', '+15103611639']
client.messages
    .create({
        from: '+13073171019',
        to: numbers[0],
        body: 'Welcome to Coronawatchers!\n' + "List of options: \n\"#1\" for number Corona Virus Cases in US;\n" +
        " \"#2\" for link to CDC info;\n" + 
        " \"#3\" for link to WHO Twitter;\n" +
        " \"#4\" - \"#9\" for a surprise;\n" +
        " \"#(a city)\" for the closest known case to that city;\n" +
        "Anything else will give you the closest case to your phone's location"
    })
    .then(message => console.log(message.sid));
