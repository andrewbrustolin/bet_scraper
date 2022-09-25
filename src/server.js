import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import  { jsonGeneration } from './jsongen.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
    
  });

app.post('/tableGeneration', async function(req, res) {
    await jsonGeneration();
    res.sendStatus(201);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

