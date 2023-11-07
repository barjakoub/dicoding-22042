const express = require('express');
const path = require('path');

const server = express();
const _port = 8080;

/* set views directory */
server.set(`views`, `./`);
server.set(`view engine`, `pug`);

/* serve static files */
server.use(`/files`, express.static(path.join(__dirname, '')));

/* render views */
server.get(`/`, (req, res) => {
  res.render(`profile`);
});

/* run */
server.listen(_port, () => {
  console.info(`server is running`);
})