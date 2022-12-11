const express = require('express');
const app = express();
app.use('/Public', express.static('public'));

module.exports = app;