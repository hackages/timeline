import express from 'express';
import schema from './data/schema';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/';

const server = express();

const PORT = process.env.PORT || 9000;

server.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(App());
  res.send(html);
});


server.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});
