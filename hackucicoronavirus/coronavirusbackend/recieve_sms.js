const calculate =  require('./calculateDistance')
const GoogleDistanceApi = require('google-distance-api');

const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  const message = req.body.Body
  const location = req.body.FromCity + ', ' + req.body.FromState + ', USA';
  twiml.message(calculate.data.distance(location) + message);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});