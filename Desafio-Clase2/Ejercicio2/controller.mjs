import express from "express";
import books from "./data.mjs";
import * as fs from 'fs';

const PORT = 8080;

const app = express();

// Middleware para analizar cuerpos JSON
app.use(express.json());
// Middleware para analizar cuerpos con formato application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// carpeta de archivos estaticos
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('/index.html');
});

app.get('/libros/:id?', (req, res)=>{
    let { id } = req.params;
    if(id){
        let book = books.find(book => book.id == id);
        if (book) {
            return res.send(book);
        } else {
            return res.status(404).send({ error: "Libro no encontrado" });
        }
    }
    res.send(books);
});

app.post('/libros', (req, res)=>{
    let book = req.body;
    books.push({
        ...book,
        "id": books.length + 1
    });
    console.log(book);
    res.redirect('/');
});

app.put('/libros/:id', (req, res)=>{
    let { id } = req.params;
    let book = req.body;
    let index = books.findIndex(book=>book.id == id);
    books.splice(index, 1, {...book, id:index});
    console.log(book);

    res.send(book);
});

app.delete('/libros/:id', (req, res) =>{
    let { id } = req.params;
    let index = books.findIndex(book=>book.id == id);
    let book = books[index]
    books.splice(index, 1);
    console.log(book);
    
    res.send(book);
});


export{
    app,
    PORT,
};