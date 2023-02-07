import Sequelize from 'sequelize'

export function User(SequelizeConn) {
    const User = SequelizeConn.define('user', {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        PasswordHash: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return User
}
