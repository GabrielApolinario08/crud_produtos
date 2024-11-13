const Produto = require('../models/produto');
const { Op } = require('sequelize');

class ProdutoRepository {
    async criar(dadosProduto) {
        return await Produto.create(dadosProduto);
    }

    async encontrarTodos() {
        return await Produto.findAll();
    }

    async encontrarPorId(id) {
        return await Produto.findByPk(id);
    }

    async atualizar(id, dadosAtualizados) {
        const produto = await Produto.findByPk(id);
        if (!produto) return null;
        return await produto.update(dadosAtualizados);
    }

    async deletar(id) {
        const produto = await Produto.findByPk(id);
        if (!produto) return null;
        await produto.destroy();
        return produto;
    }

    async buscarProdutos(pagina = 1, limite = 10, busca = '') {
        const onde = busca ? {
            [Op.or]: [
                { nome: { [Op.like]: `%${busca}%` } },
                { categoria: { [Op.like]: `%${busca}%` } }
            ]
        } : {};
        console.log('Pagina:', pagina, 'Limite:', limite); 
       
        const produtos = await Produto.findAndCountAll({
            where: onde,
            limit: parseInt(limite, 10), 
            offset: (pagina - 1) * limite,
        });
        return produtos;
    };
    
}

module.exports = new ProdutoRepository();
