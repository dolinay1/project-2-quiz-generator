module.exports = function (sequelize, DataTypes) {
    var Answers = sequelize.define("Answers", {
        // answerID: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false
        // },
        // questionID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "questions",
        //         key: "questionID"
        //     }
        // },
        answer: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });

    Answers.associate = function (models) {

        Answers.belongsTo(models.Questions, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Answers;
};