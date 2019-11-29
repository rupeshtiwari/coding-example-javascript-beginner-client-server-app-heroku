const express = require('express');
const path = require('path');

const port = process.env.PORT || 4400;

// get the dist
const distDir = path.join(__dirname, '../../dist');

express()
  .use(express.static(distDir))
  //serve index.html
  .get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')))
  .listen(port, () => console.log(`Server is running on ${port}`));
