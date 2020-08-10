const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World! I wanna see some changes here: Here you go!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);
