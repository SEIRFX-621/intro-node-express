const express = require('express');
const app = express();

// app.get('/', function(req, res) {
//     res.send('Hello, World!');
// });

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname+'/views/about.html');
});

app.get('/blog', function(req, res) {
    res.sendFile(__dirname+'/views/blog.html');
});

app.use('/static', express.static('views'))

app.get('/getMessage', function(req, res) {
    res.status(200).send('this is a message from our backend service!');
});

app.get('/getMessageJson', function(req, res) {
    res.status(200).send({ message: 'this is a json response from our backend service!'});
});

app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})

app.listen(8000);