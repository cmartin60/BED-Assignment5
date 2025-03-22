import express from "express";
import { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeControllers";
import { validateRequest } from "../middleware/validate";
import { employeeSchema } from "../validation/employeeValidation";


const router = express.Router();

/**
 * @openapi
 * /employees:
 *   get:
 *     summary: Get all employees
 *     responses:
 *       200:
 *         description: Employees retrieved successfully
 */
router.get("/", getAllEmployees);

/**
 * @openapi
 * /employees/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee retrieved successfully
 *       404:
 *         description: Employee not found
 */
router.get("/:id", getEmployeeById);

/**
 * @openapi
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *               department:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               branchId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.post("/", validateRequest(employeeSchema), createEmployee);

/**
 * @openapi
 * /employees/{id}:
 *   put:
 *     summary: Update an existing employee
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               position:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Employee updated successfully
 */
router.put("/:id", validateRequest(employeeSchema), updateEmployee);

/**
 * @openapi
 * /employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 */
router.delete("/:id", validateRequest(employeeSchema), deleteEmployee);

export default router;
