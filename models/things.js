module.exports = function(sequelize, DataTypes) {
    var Thing = sequelize.define("Thing", {
        thing_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    return Thing;
};