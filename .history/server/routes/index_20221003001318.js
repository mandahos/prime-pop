import express from 'express';
import { createEmployee } from '../controllers/employee';

import {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} from "../controllers/employee";

const router = express.Router();

router.get("/", getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;