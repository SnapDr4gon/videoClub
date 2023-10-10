module.exports = (sequelize, type) => {
    const Movie = sequelize.define('Movies', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        title: type.STRING
    });

    return Movie;
}