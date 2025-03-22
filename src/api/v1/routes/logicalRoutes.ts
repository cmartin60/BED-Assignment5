import express from "express";
import { getEmployeesByBranch, getEmployeesByDepartment } from "../controllers/logicalControllers";

const router = express.Router();

/**
 * @openapi
 * /branches/{branchId}/employees:
 *   get:
 *     summary: Get all employees for a specific branch
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employees retrieved successfully
 *       404:
 *         description: Branch not found or no employees in branch
 */
router.get("/branches/:branchId/employees", getEmployeesByBranch);

/**
 * @openapi
 * /departments/{department}/employees:
 *   get:
 *     summary: Get all employees for a specific department
 *     parameters:
 *       - in: path
 *         name: department
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employees retrieved successfully
 *       404:
 *         description: Department not found or no employees in department
 */
router.get("/departments/:department/employees", getEmployeesByDepartment);


export default router;
