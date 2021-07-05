const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificulty:{
            type: DataTypes.INTEGER,
            validate:{
                max: 5,
                min:1
            },
            allowNull:true
        },
        duration:{
            type:DataTypes.INTEGER
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        }
    });
};