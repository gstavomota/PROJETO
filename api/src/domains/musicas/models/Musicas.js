const sequelize = require('../../../../database/index');
const {DataTypes, Sequelize} = require('sequelize');
const Usuario = require('../../usuarios/models/Usuario');
const UsuarioMusica = require('../../UsuarioMusica/models/UsuarioMusica');

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

Musicas.sync({alter:true, force:true})
    .then(()=>{
        console.log('Tabela de Musicas foi (re)criada');
    })
    .catch((err)=>console.log(err));
    
// Usuario.sync({alter:true, force:true})
//     .then(()=>{
//         console.log('Tabela de Usuariox foi (re)criada');
//     })
//     .catch((err)=>console.log(err));
    
    // Musicas.belongsTo(Artistas)
    // Artistas.hasMany(Musicas)
    // Musicas.belongsToMany(Usuario, {through: UsuarioMusica})
    // Usuario.belongsToMany(Musicas, {through: UsuarioMusica})
    
module.exports = Musicas;
