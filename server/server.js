const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Routers go here
const searchRouter = require('./search.router');
const loginRouter = require('./login.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes go here
app.use('/api/search', searchRouter);
app.use('/api/login', loginRouter);

app.use(express.static('build'));

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Listenting on port: ${PORT}`);
})