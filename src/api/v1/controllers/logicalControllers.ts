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
        const employees: Employee[] = await employeeService.getAllEmployees();
        const filteredEmployees = employees.filter(emp => emp.branchId === branchId);
        res.status(200).json({ message: "Employees Retrieved", data: filteredEmployees });
    } catch (error) {
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
        const employees: Employee[] = await employeeService.getAllEmployees();
        const filteredEmployees = employees.filter(emp => emp.department === department);
        res.status(200).json({ message: "Employees Retrieved", data: filteredEmployees });
    } catch (error) {
        next(error);
    }
};
