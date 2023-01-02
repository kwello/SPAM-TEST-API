const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, DataTypes);
db.contacts = require('./contactModel')(sequelize,DataTypes);
db.spams = require('./spamModel')(sequelize,DataTypes);

db.sequelize.sync({force: false})
.then(() => {
    console.log('Drop and re-sync db.');
});

// 1 TO MANY RELATIONSHIP BTWN USER AND CONTACTS

db.users.hasMany(db.contacts, {
    foreignKey : 'user_id',
    as: 'done'
})

db.contacts.belongsTo(db.users,{
    foreignKey: 'user_id',
    as: 'done'
})


module.exports = db;