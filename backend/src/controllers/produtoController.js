const produtoService = require('../services/produtoService');

exports.criarProduto = async (req, res) => {
    try {
        const produto = await produtoService.criarProduto(req.body);
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.obterProdutoPorId = async (req, res) => {
    try {
        const produto = await produtoService.obterProdutoPorId(req.params.id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.atualizarProduto = async (req, res) => {
    const { id } = req.params;
    // Verifica se o ID foi passado
    if (!id) {
        return res.status(400).json({ error: "ID do produto é obrigatório" });
    }
    try {
        const produto = await produtoService.atualizarProduto(id, req.body);
        res.status(200).json(produto);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deletarProduto = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "ID do produto é obrigatório" });
    }
    try {
        await produtoService.deletarProduto(id);
        res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.listarProdutos = async (req, res) => {
    try {
        const { pagina = 1, limite = 5, busca = '' } = req.query;

        const limiteNumero = parseInt(limite, 10); 

        const produtos = await produtoService.buscarProdutos(pagina, limiteNumero, busca);

        res.status(200).json({
            total: produtos.count, 
            pagina,
            limite: limiteNumero,  
            produtos: produtos.rows, 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Erro ao buscar produtos',
            error: error.message || error,
        });
    }
};

exports.listarProdutosComFiltro = async (req, res) => {
    try {
        const { pagina = 1, limite = 5, busca = '', categoria = '' } = req.query;
        const produtos = await produtoService.buscarProdutos(pagina, limite, busca, categoria);

        res.status(200).json({
            total: produtos.count,
            pagina,
            limite,
            produtos: produtos.rows,
        });
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).json({
            message: 'Erro ao buscar produtos',
            error: error.message || error,
        });
    }
};

exports.buscarProdutosComFiltro = async (req, res) => {
    try {
        const { pagina = 1, limite = 5, busca = '', categoria = '' } = req.query;

        const produtos = await produtoService.buscarProdutos(pagina, limite, busca, categoria);

        res.status(200).json({
            total: produtos.count,
            pagina,
            limite,
            produtos: produtos.rows,
        });
    } catch (error) {
        console.error("Erro ao buscar produtos com filtro:", error);
        res.status(500).json({
            message: 'Erro ao buscar produtos com filtro',
            error: error.message || error,
        });
    }
};
