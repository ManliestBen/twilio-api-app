require('dotenv').config()
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

function sendText(){
    client.messages
        .create({
            body: 'Ring, ring ring ring ring, BANANAPHONE!!!',
            from: '+13344876370',
            to: '+17853411918'
        })
        .then(message => console.log(message.sid));
}