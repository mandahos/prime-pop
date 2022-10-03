import { Sequelize } from "sequelize";
 
const db = new Sequelize('employees', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;