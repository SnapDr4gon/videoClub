module.exports = (sequelize, type) => {
    const Genre = sequelize.define('Genres', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        description: type.STRING,
        status: type.BOOLEAN
    });
    
    return Genre;
}