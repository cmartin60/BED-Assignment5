import { Request, Response, NextFunction } from "express";
import { validate, validateRequest } from "../src/api/v1/middleware/validate";
import { employeeSchema } from "../src/api/v1/validation/employeeValidation";

interface Employee {
    id?: string;
    name: string;
    position: string;
    email: string;
    branchId: string;
}

describe("validate function for employees", () => {
    it("should not throw an error for valid employee data", () => {
        const data: Employee = {
            name: "John Doe",
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).not.toThrow();
    });

    it("should not throw an error for valid employee data with optional fields", () => {
        const data: Employee = {
            id: "12345",
            name: "John Doe",
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).not.toThrow();
    });

    it("should throw an error for missing name", () => {
        const data: Partial<Employee> = {
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).toThrow(
            "Validation error: Name is required"
        );
    });

    it("should throw an error for empty name", () => {
        const data: Employee = {
            name: "",
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).toThrow(
            "Validation error: Name cannot be empty"
        );
    });

    it("should throw an error for missing position", () => {
        const data: Partial<Employee> = {
            name: "John Doe",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).toThrow(
            "Validation error: Position is required"
        );
    });

    it("should throw an error for empty position", () => {
        const data: Employee = {
            name: "John Doe",
            position: "",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).toThrow(
            "Validation error: Position cannot be empty"
        );
    });

    it("should throw an error for invalid email format", () => {
        const data: Employee = {
            name: "John Doe",
            position: "Software Engineer",
            email: "invalid-email",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        expect(() => validate(employeeSchema, data)).toThrow(
            "Validation error: Invalid email format"
        );
    });

    it("should throw an error for missing branchId", () => {
        const data: Partial<Employee> = {
            name: "John Doe",
            position: "Software Engineer",
            email: "johndoe@example.com",
        };

        expect(() => validate(employeeSchema, data)).toThrow(
            "Validation error: Branch ID is required"
        );
    });
});

describe("validateRequest middleware for employees", () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = { body: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    it("should call next for valid employee data", () => {
        req.body = {
            name: "John Doe",
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        validateRequest(employeeSchema)(req as Request, res as Response, next);

        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });

    it("should return 400 for missing name", () => {
        req.body = {
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        validateRequest(employeeSchema)(req as Request, res as Response, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            error: "Validation error: Name is required",
        });
    });

    it("should return 400 for empty name", () => {
        req.body = {
            name: "",
            position: "Software Engineer",
            email: "johndoe@example.com",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        validateRequest(employeeSchema)(req as Request, res as Response, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            error: "Validation error: Name cannot be empty",
        });
    });

    it("should return 400 for invalid email format", () => {
        req.body = {
            name: "John Doe",
            position: "Software Engineer",
            email: "invalid-email",
            branchId: "550e8400-e29b-41d4-a716-446655440000",
        };

        validateRequest(employeeSchema)(req as Request, res as Response, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            error: "Validation error: Invalid email format",
        });
    });

    it("should return 400 for missing branchId", () => {
        req.body = {
            name: "John Doe",
            position: "Software Engineer",
            email: "johndoe@example.com",
        };

        validateRequest(employeeSchema)(req as Request, res as Response, next);

        expect(next).not.toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            error: "Validation error: Branch ID is required",
        });
    });
});
