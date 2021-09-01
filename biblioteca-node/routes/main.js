import express from 'express'
import path from 'path'
import {consultarLivro, listarLivros, newBook, updateLivro, deletarLivro} from '../services/index'

var router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).sendFile(path.resolve('./views/home/index.html'))
})

router.get('/create', (req, res)=>{
    res.status(200).sendFile(path.resolve('./views/create/index.html'))
})

router.post('/create', (req, res)=>{
    newBook(req.body)
})  

router.get('/read', (req, res) =>{
    const livros = listarLivros();
    res.json(livros)
})

router.get('/read/:livroID', (req,res)=>{
    const livroID = (req.params);
    const livro = consultarLivro(livroID);
    res.json(livro)
})

router.get('/update', (req, res) =>{
    res.status(200).sendFile(path.resolve('./views/update/index.html'))
})

router.post('/update', (req, res) => {
    const livro = req.body;
    console.log(livro);
    updateLivro(livro);
})

router.get('/delete', (req, res) =>{
    res.status(200).sendFile(path.resolve('./views/delete/index.html'))

})
router.post('/delete', (req, res) =>{
    const livroID = Number(req.body.id);
    deletarLivro(livroID);
})
router.get('/teste', (req, res)=>{
    
})




export default router;