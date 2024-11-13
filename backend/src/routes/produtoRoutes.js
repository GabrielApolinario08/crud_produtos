const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/', produtoController.criarProduto);
router.get('/buscar', produtoController.buscarProdutosComFiltro);
router.get('/', produtoController.listarProdutos);
router.get('/:id', produtoController.obterProdutoPorId);
router.put('/:id', produtoController.atualizarProduto);
router.put('/', produtoController.atualizarProduto);
router.delete('/:id', produtoController.deletarProduto);
router.delete('/', produtoController.deletarProduto);
module.exports = router;
