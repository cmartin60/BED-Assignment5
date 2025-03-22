
import express, { Express } from "express";
import morgan from "morgan";

import setupSwagger from "../config/swagger";

import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";
import logicalOperationsRoutes from "./api/v1/routes/logicalRoutes";

// initialize the express application
const app: Express = express();

// setup OpenAPI for API documentation
setupSwagger(app);

app.use(morgan("combined"));
app.use(express.json());


/**
 * @openapi
 * /:
 *   get:
 *     summary: Root endpoint
 *     responses:
 *       200:
 *         description: Returns a welcome message
 */
app.get("/", (req, res) => {
  res.send("Hello, world!");
});


/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req, res) => {
  res.send("Retrieve tasks");
});


/**
 * @openapi
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     responses:
 *       200:
 *         description: Server is healthy
 */
app.get("/health", (req, res) => {
	res.status(200).send("Server is healthy");
});

// API routes
app.use("/api/v1/routes", employeeRoutes);
app.use("/api/v1/branches", branchRoutes);
app.use("/api/v1", logicalOperationsRoutes);

// export app and server for testing
export default app;
