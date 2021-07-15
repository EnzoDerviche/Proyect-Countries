const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
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
        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        }
    });
};
