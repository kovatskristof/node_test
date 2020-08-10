const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Lets see if the automatic deployment works.');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
