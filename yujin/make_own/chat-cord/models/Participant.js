const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize){
    // foreign Key : (Room)room_no, (User)user_no
    return sequelize.define('Participant', {
        no: {
            field: 'no',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role: {
            field: 'role',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        status: {
            field: 'status',
            type: DataTypes.ENUM('true', 'false'),
            allowNull: false
        },
        createdAt: {
            field: 'createdAt',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        lastReadAt: {
            field: 'lastReadAt',
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        underscored: false, // updateAt -> updateAt (underscored: update_at)
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'participant'
    });
}
