const accountSid = 'ACf176416553631042bf17042fa4a1fa3f';
const authToken = 'f7ea90368f780208216f9c0fb116e51d';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        
        from: '+13073171019',
        to: '+14084426432',
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?' +
    })
    
    .then(message => console.log(message.sid));