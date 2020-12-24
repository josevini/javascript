var autor = {
    nome: 'Vinicius Silva',
    totLivros: 2,
    escrever(livro) {
        console.log(`${this.nome} escreveu o livro "${livro}"`)
        this.totLivros += 1
    }
}

autor.idade = 17
console.log(`${autor.nome} tem ${autor.idade} anos e já escreveu ${autor.totLivros} livros!`)
autor.escrever("JavaScript básico")
autor.escrever("JavaScript com POO")
console.log(`O autor, ${autor.nome}, já escreveu, no total, ${autor.totLivros} livros`)