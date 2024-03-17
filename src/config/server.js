const express = require('express');
const bodyparser = require('body-parser')

const app = express()

app.set('port', process.env.PORT || 30000);
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

module.exports = app
