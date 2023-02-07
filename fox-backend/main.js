import { app, db } from './src/app/app.js'

db.sequelize.authenticate()
    .then(() => {
        console.log('DB Connection successfull');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Sync defined models
db.sequelize.sync()
    .then(() => {
        console.log('Syncing models successful')
    })
    .catch(err => {
        console.log('Error in syncing models :', err)
    })

const PORT = process.env.PORT || 8085

// Start Server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

