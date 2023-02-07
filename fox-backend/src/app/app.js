import express from 'express'
import { Sequelize } from 'sequelize'
import router from './url-mappings.js'
import morgan from 'morgan'
import { User } from '../models/user.js'
import cors from 'cors';
import { favourite } from '../models/fav.js'


const app = express();
app.use(cors());

app.use(morgan('common'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

// Create a DB connection
const sequelize = new Sequelize('bookdb', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: true,
    define: {
        underscored: true,
        freezeTableName: false,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: true
    },
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User(sequelize)
db.favourite=favourite(sequelize)

export {
    app,
    db
}

