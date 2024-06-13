module.exports = (sequelize, Sequelize) => {
    const Progress = sequelize.define("progress", {
        progress: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });

    return Progress;
};
