module.exports = (sequelize, DataTypes) => {

    const Spam = sequelize.define("spam", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        s_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return Spam
}