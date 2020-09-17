import app from './app';
import 'reflect-metadata';
import './database';

const port = Number.parseInt(process.env.PORT) || 3000;
var server_host = process.env.YOUR_HOST || "0.0.0.0";

app.listen(port, server_host, () => {
  console.log(' 🐣 Running Server in port ', port);
});
