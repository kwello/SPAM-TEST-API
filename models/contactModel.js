module.exports = (sequelize, DataTypes) => {

    const Contact = sequelize.define("contact", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        c_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        c_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return Contact
}