module.exports = (sequelize, Sequelize) => {
    const Progress = sequelize.define("progress", {
        progress: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false  // Disable timestamps
    });

    return Progress;
};
