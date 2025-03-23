/**
 * Logical Controller
 *
 * This file defines functions (controllers) for handling logical operations
 * between employees and branches, such as retrieving employees by branch or department.
 */

import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeServices";
import type { Employee } from "../models/employeeModel";

/**
 * @description Get all employees for a specific branch.
 * @route GET /branches/:branchId/employees
 * @returns {Promise<void>}
 */
export const getEmployeesByBranch = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { branchId } = req.params;

        const employee = await employeeService.getEmployeeById(branchId);
        const employees: Employee[] = employee ? [employee] : [];

        if (!employees || employees.length === 0) {
            res.status(404).json({ message: "No employees found for this branch" });
        }

        res.status(200).json({ message: "Employees Retrieved", data: employees });
    } catch (error) {
        console.error("Error fetching employees by branch:", error);
        next(error);
    }
};

/**
 * @description Get all employees for a specific department.
 * @route GET /departments/:department/employees
 * @returns {Promise<void>}
 */
export const getEmployeesByDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { department } = req.params;

        const employee = await employeeService.getEmployeeById(department);
        const employees: Employee[] = employee ? [employee] : [];

        if (!employees || employees.length === 0) {
            res.status(404).json({ message: "No employees found for this department" });
        }

        res.status(200).json({ message: "Employees Retrieved", data: employees });
    } catch (error) {
        console.error("Error fetching employees by department:", error);
        next(error);
    }
};
