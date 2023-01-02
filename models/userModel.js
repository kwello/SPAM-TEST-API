module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("user", {

        name: {
            type: DataTypes.STRING,
            allowNull: false, //NEED TO ENTER THE NAME
        },

        phone: {
            type: DataTypes.INTEGER,
            allowNull: false, //NEED TO ENTER THE PHONE NUMBER
        },

        email: {
            type: DataTypes.STRING, // can be NULL
        }

    });
    return User;
};