import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import  { jsonGeneration } from './jsongen.js';

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));
jsonGeneration();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
    
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);