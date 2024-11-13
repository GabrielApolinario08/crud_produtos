const produtoRepository = require('../repositories/produtoRepository');

class ProdutoService {

    async criarProduto(dadosProduto) {
        const { nome, preco, quantidade } = dadosProduto;
        console.log(dadosProduto)
        if (!nome) throw new Error("O campo nome é obrigatório.");
        if (preco == undefined || preco == null) throw new Error("O campo preço é obrigatório.");
        if (quantidade == undefined || quantidade == null) throw new Error("O campo quantidade é obrigatório.");

        if (preco < 0) throw new Error("O campo preço não deve ser negativo.");
        if (quantidade < 1) throw new Error("O campo quantidade deve ser maior ou igual a 1.")
        return await produtoRepository.criar(dadosProduto);
    }

    async obterProdutos() {
        return await produtoRepository.encontrarTodos();
    }

    async obterProdutoPorId(id) {
        const produto = await produtoRepository.encontrarPorId(id);
        if (!produto) throw new Error('Produto não encontrado');
        return produto;
    }

    async atualizarProduto(id, dadosAtualizados) {
        const { preco, quantidade } = dadosAtualizados;
        if (preco !== null && preco < 0) throw new Error("O campo preço não deve ser negativo.");
        if (quantidade !== null && quantidade < 1) throw new Error("O campo quantidade deve ser maior ou igual a 1.")
        const produto = await produtoRepository.atualizar(id, dadosAtualizados);
        if (!produto) throw new Error('Produto não encontrado');
        return produto;
    }

    async deletarProduto(id) {
        const produto = await produtoRepository.deletar(id);
        if (!produto) throw new Error('Produto não encontrado');
        return produto;
    }

    async buscarProdutos(pagina = 1, limite = 10, busca = '') {
        const produtos = await produtoRepository.buscarProdutos(pagina, limite, busca);
        return produtos;
    };
}

module.exports = new ProdutoService();
