const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/dist'));

app.use(function (req, res, next) {
  res.status(404).send('Error: 404');
});

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
