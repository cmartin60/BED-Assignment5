/**
 * @interface Employee
 * @description Represents an employee object.
 * 
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - position
 *         - department
 *         - email
 *         - phone
 *         - branchId
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for an employee.
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         name:
 *           type: string
 *           description: The full name of the employee.
 *           example: "John Doe"
 *         position:
 *           type: string
 *           description: The job position of the employee.
 *           example: "Software Engineer"
 *         department:
 *           type: string
 *           description: The department in which the employee works.
 *           example: "IT"
 *         email:
 *           type: string
 *           format: email
 *           description: The work email address of the employee.
 *           example: "johndoe@example.com"
 *         phone:
 *           type: string
 *           pattern: "^\+?[1-9]\d{1,14}$"
 *           description: The contact phone number of the employee (E.164 format).
 *           example: "+1234567890"
 *         branchId:
 *           type: string
 *           description: The ID of the branch where the employee is assigned.
 *           example: "b12345"
 */
export type Employee = {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    branchId: string;
};
