
import LivrosDao from '../models/livros'



export async function newBook(livro){
    LivrosDao.newBook(livro);

}

export function listarLivros(){
    return LivrosDao.listarLivros()
}

export function consultarLivro(livroID){
    const livro = LivrosDao.consultarLivro(livroID)
    return livro
}

export function updateLivro(livro){
    LivrosDao.updateLivro(livro);
}

export function deletarLivro(livroID){
    LivrosDao.deletarLivro(livroID);
}
