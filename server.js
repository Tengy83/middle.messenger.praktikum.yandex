const express = require('express');
const Bundler = require('parcel-bundler');

const app = express();
const PORT = 3000;
const file = `./index.html`;

const bundler = new Bundler(file, { watch: true, cache: false });

app.use(bundler.middleware());

app.listen(PORT, function () {
  console.log(`Server running at http://localhost:${PORT}`);
});
