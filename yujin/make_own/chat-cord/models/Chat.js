const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize){
    // foreign Key : (Participant)participant_no
    return sequelize.define('Chat', {
        no: {
            field: 'no',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type: {
            field: 'type',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        createdAt: {
            field: 'createdAt',
            type: DataTypes.DATE,
            allowNull: false
        },
        contents: {
            field: 'contents',
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
        read: {
            field: 'read',
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: false, // updateAt -> updateAt (underscored: update_at)
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'chat'
    });
}
