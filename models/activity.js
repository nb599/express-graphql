export default (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
        title: DataTypes.STRING,
    });
    Activity.associate = (models) => {
        // 1 to many with suggestion
        Activity.hasMany(models.Suggestion, {
            foreignKey: 'activityId',
        });
    };

    return Activity;
};