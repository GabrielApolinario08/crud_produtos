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

    async buscarProdutos(pagina = 1, limite = 10, busca = '', categoria = '') {
        const offset = (pagina - 1) * limite;
        const filtros = {};
    
        // Adiciona condições de busca apenas se não forem nulas ou vazias
        if (busca) {
            filtros.nome = { [Op.like]: `%${busca}%` }; // Busca produtos com nome que contenha a palavra "busca"
        }
        if (categoria) {
            filtros.categoria = categoria; // Filtra pela categoria exata
        }
    
        return await Produto.findAndCountAll({
            where: filtros,
            limit: limite,
            offset: offset
        });
    }
    
}

module.exports = new ProdutoRepository();
