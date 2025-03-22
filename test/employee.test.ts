import request from "supertest";
import app from "../src/app";
import {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
} from "../src/api/v1/controllers/employeeControllers";


jest.mock("../src/api/v1/controllers/employeeControllers", () => ({
    getAllEmployees: jest.fn((req, res) => res.status(200).send()),
    createEmployee: jest.fn((req, res) => res.status(201).send()),
    updateEmployee: jest.fn((req, res) => res.status(200).send()),
    deleteEmployee: jest.fn((req, res) => res.status(200).send()),
    getEmployeeById: jest.fn((req, res) => res.status(200).send()),
}));

describe("Employee Routes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("GET /api/v1/routes", () => {
        it("should call getAllEmployees controller", async () => {
            await request(app).get("/api/v1/routes");
            expect(getAllEmployees).toHaveBeenCalled();
        });
    });

    describe("POST /api/v1/routes", () => {
        it("should call createEmployee controller", async () => {
            const mockEmployee = {
                name: "John Doe",
                position: "Software Engineer",
                email: "johndoe@example.com",
                branchId: "550e8400-e29b-41d4-a716-446655440000",
            };

            await request(app).post("/api/v1/routes").send(mockEmployee);
            expect(createEmployee).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/routes/:id", () => {
        it("should call getEmployeeById controller", async () => {
            await request(app).get("/api/v1/routes/1");
            expect(getEmployeeById).toHaveBeenCalled();
        });
    });
});
