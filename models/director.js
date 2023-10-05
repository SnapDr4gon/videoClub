module.exports = (sequelize, type) => {
    const Director = sequelize.define('Directors', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        name: type.STRING,
        lastName: type.STRING
    });

    return Director;
}