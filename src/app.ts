
import express, { Express } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import setupSwagger from "../config/swagger";

import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchRoutes";
import logicalOperationsRoutes from "./api/v1/routes/logicalRoutes";
import errorHandler from "./api/v1/middleware/errorHandler";

// initialize the express application
const app: Express = express();

// apply the default helmet security
app.use(helmet());

app.use(cors());

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

app.use(errorHandler);

// export app and server for testing
export default app;
