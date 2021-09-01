class LivrosDao{
        livros = [
        {
            id:.1,
            nome:"Harry Potter",
            descricao:"primeiro livro",
            deleted:false
        },
        {
            id:2,
            nome:"Festa dos Bixo",
            descricao:"xesquedele",
            deleted:false
        
        }
    ]
            consultarLivro(livroID){
                const livro = this.livros.find(({id}) => id === Number(livroID["livroID"]));
                return livro
    }
            newBook(livro){
                const tamanho = this.livros.length;
                this.livros.push({id:tamanho+1, nome:livro.nome, descricao:livro.descricao, deleted:false});
    }
            listarLivros(){
                for(var i=0;i<this.livros.length;i++){
                    var livrosFalsos = this.livros.filter(livro => livro.deleted === false) 
                }
                return livrosFalsos

                    
    }   
            updateLivro(livro){
                const index = this.livros.findIndex(({id}) => id === Number(livro.id));
                this.livros[index] = livro;
    }
            deletarLivro(livroID){
                const livro = this.livros.find(({id}) => id === livroID);
                this.updateLivro({...livro,deleted:true})
                
            }
}

export default new LivrosDao();