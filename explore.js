const Twilio = require("twilio");

const client = new Twilio(
    "ACc3ed80b7edf970835a12219b54c86ab2", 
    "2da3926dc2caa0e4a8405b55799eef0a"
);

client.messages
  .list()
  .then(messages => 
    console.log(`The most recent message is ${messages[0].body}`)
  ).catch(err => console.log(err));

console.log('Gathering your message log');
