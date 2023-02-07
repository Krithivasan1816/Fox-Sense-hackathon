import Sequelize from 'sequelize'

export function favourite(SequelizeConn) {
    const favourite = SequelizeConn.define('favbook', {
        userEmail:{
            type: Sequelize.STRING,

        },
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Image: {
            type : Sequelize.STRING

        }
    });
    return favourite
}
export function read(SequelizeConn) {
    const read = SequelizeConn.define('readbook', {
        userEmail:{
            type: Sequelize.STRING,

        },
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Image: {
            type : Sequelize.STRING

        }
    });
    return read
}