const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');
const UsuarioMusica = require('./UsuarioMusica');
const Musicas = require('./Musicas')

const Usuario = sequelize.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cargo:{
        type: DataTypes.STRING,
        allowNull:false,
    }
});

// Usuario.belongsToMany(Musicas,{
//     through: {
//         model: UsuarioMusica
//     }
// })

// Musicas.belongsToMany(Usuario,{
//     through: {
//         model: UsuarioMusica
//     }
// })

Usuario.sync({alter: true, force: true})
    .then(()=>{
        console.log('Tabela de Usuarios foi (re)criada');
    })
    .catch((err)=>console.log(err));
module.exports = Usuario;
