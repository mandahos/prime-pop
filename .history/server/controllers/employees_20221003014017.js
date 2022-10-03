import Employees from "../models/employeeModel.js";
 
export const getAllEmployees = async (req, res) => {
    try {
        const employee = await Employees.findAll();
        res.json(employee);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employees.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(employee[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createEmployee = async (req, res) => {
    try {
        await Employees.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateEmployee = async (req, res) => {
    try {
        await Employees.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Employee Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteEmployee = async (req, res) => {
    try {
        await Employees.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Employee Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}