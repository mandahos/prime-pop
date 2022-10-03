

module.exports= (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        title: {
            first_name: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.INTEGER
        }
    });
    return Users;
};

