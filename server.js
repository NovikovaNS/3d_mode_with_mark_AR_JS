const express = require('express');
const app = express();
const path = require('path');

app.set('/', 'html');
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.set(express.urlencoded({extended: false}));

app.get('/', (request, responce) => {
    responce.render('index');
});

app.listen(8080, () => {
    console.log('Listening on http://localhost:8080');
});