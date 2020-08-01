import express from 'express';
import { join } from 'path';
import open from 'open';

const teams = require('./feed');
const port = 3000;
const app = express();

app.get('/', function(req, res){
    res.sendFile(join(__dirname, '/index.html'));
  });
  
  app.listen(port, function(err){
    if (err) {
      console.log(err);
    } else {
      open('http://localhost:' + port);
      console.log('We are running Statz on 3000');
    }
  });