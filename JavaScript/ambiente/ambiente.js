var autor = {
    nome: 'Vinicius Silva',
    totLivros: 2,
    escrever() {
        console.log(`${this.nome} escreveu mais um livro`)
        this.totLivros += 1
    }
}

autor.idade = 17
console.log(`${autor.nome} tem ${autor.idade} anos e já escreveu ${autor.totLivros} livros!`)
autor.escrever()
autor.escrever()
console.log(`O autor, ${autor.nome}, já escreveu ${autor.totLivros} livros`)