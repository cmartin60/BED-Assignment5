import express from "express";
import { getAllBranches, getBranchById, createBranch, updateBranch, deleteBranch } from "../controllers/branchControllers";
import { validateRequest } from "../middleware/validate";
import { branchSchema } from "../validation/branchValidation";

const router = express.Router();

/**
 * @openapi
 * /branches:
 *   get:
 *     summary: Get all branches
 *     responses:
 *       200:
 *         description: Branches retrieved successfully
 */
router.get("/", getAllBranches);

/**
 * @openapi
 * /branches/{id}:
 *   get:
 *     summary: Get a branch by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch retrieved successfully
 *       404:
 *         description: Branch not found
 */
router.get("/:id", getBranchById);

/**
 * @openapi
 * /branches:
 *   post:
 *     summary: Create a new branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Branch created successfully
 */
router.post("/", validateRequest(branchSchema), createBranch);

/**
 * @openapi
 * /branches/{id}:
 *   put:
 *     summary: Update an existing branch
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
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Branch updated successfully
 */
router.put("/:id", validateRequest(branchSchema), updateBranch);

/**
 * @openapi
 * /branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Branch deleted successfully
 */
router.delete("/:id", validateRequest(branchSchema), deleteBranch);

export default router;