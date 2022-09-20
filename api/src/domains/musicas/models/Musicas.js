const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');
const Artistas = require('./Artistas')
const Usuario = require('./Usuario')

const Musicas = sequelize.define('Musicas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
    },
    foto:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull:false,
    }
});

Musicas.belongsTo(Artistas)
Artistas.hasMany(Musicas)


Musicas.sync({alter: true, force: true})
    .then(()=>{
        console.log('Tabela de Musicas foi (re)criada');
    })
    .catch((err)=>console.log(err));
module.exports = Musicas;
