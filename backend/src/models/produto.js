const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isDecimal: true,
            min: 0,
        },
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
        },
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'produtos',
    timestamps: false,
});

module.exports = Produto;
