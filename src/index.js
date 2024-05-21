const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { PORT } = require('./config/serverConfig');


const prepareAndStartServer = () => {


    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
    });
}   

prepareAndStartServer();