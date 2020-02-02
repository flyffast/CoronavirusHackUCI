const calculate =  require('./calculateDistance')
const GoogleDistanceApi = require('google-distance-api');

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser')
//********************************************************* */
var test = 0;
/************************** */
const app = express();
app.use(bodyParser.urlencoded({extended: false}))

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  const messages = req.body.Body
  
  var location = req.body.FromCity + ', ' + req.body.FromState + ', USA';

  if(messages.length > 0 && messages[0] == '#')
  {
    console.log("USER INPUT");
    calculate.data.distance(messages, twiml, res);
  }
  else
  {
    test = calculate.data.distance(location, twiml, res);
  }


 console.log("what:" + test);


});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port: 1337');
});