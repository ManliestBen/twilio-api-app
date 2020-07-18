const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const userRouter = require('./routes/users');
const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', userRouter);

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});

function sendText(message){
    client.messages
        .create({
            body: `${message}`,
            from: '+13344876370',
            to: '+17853411918'
        })
        .then(message => console.log(message.sid));
}

// sendText("BananaPhone");
