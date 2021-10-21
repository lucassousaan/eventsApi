const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const eventsRoute = require('./routes/events');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());


app.use('/events', eventsRoute);

// ROTAS
app.get('/', (req, res) => {
    res.send('Estamos na home');
})


//Conectando ao BD
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to db'))

// Ouvindo o servidor na porta 3000
app.listen(3000);
