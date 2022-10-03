
import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
 
const { DataTypes } = Sequelize;
 
const Employees = db.define('employee',{
    name:{
        type: DataTypes.STRING
    },
    department:{
        type: DataTypes.STRING
    },
    id:{
        type: DataTypes.INTEGER
    }
},
{
    freezeTableName: true
});
 
export default Employees;


