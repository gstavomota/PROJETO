const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');

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
    artistaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Artistas',
            key:'id'
        }
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull:false,
    }
});

Musicas.sync({alter: true, force: false})
    .then(()=>{
        console.log('Tabela de Musicas foi (re)criada');
    })
    .catch((err)=>console.log(err));
module.exports = Musicas;
