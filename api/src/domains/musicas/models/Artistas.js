const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');

const Artistas = sequelize.define('Artistas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    nacionalidade:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    foto:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

Artistas.sync({alter:true, force:false}).then(()=>{
    console.log ('Tabela de Artistas foi (re)criada');
}).catch((err)=>console.log(err));

module.exports = Artistas;