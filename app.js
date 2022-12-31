const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});