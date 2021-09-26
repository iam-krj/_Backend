const express = require('express');
const res = require('express/lib/response');
const app = express();

//security, performance, edge cases
//CRUD -> POST, GET, PUT, DELETE
app.get('/', (req, res) => {
    //db update
    res.status(500).send("database not connecting");
});
app.get('/products', (req, res) => {
    res.send(req.query.q);
})

app.get('/user/:id/books/:bookId', (req, res) => {
    console.log(req.query);
    res.send(req.params);

})
app.listen(5000);