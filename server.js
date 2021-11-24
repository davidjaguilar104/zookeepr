const apiRoutes = require('./routes/apiRoutes'); // goes to index.js auto
const htmlRoutes = require('./routes/htmlRoutes'); // goes to index.js auto 

const fs = require('fs');
const path = require('path');

const { animals } = require('./data/animals.json');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// provide file path to location in our app (the 'public' folder) and instruct server to make the files inside this directory static resources 
app.use(express.static('public'));

// parse incoming string or array data 
app.use(express.urlencoded({extended: true}));

// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

