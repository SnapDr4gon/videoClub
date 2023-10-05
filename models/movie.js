module.exports = (sequelize, type) => {
    const Movie = Sequelize.define('Movies', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        title: type.STRING
    });

    return Movie;
}