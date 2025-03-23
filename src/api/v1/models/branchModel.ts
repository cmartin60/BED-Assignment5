/**
 * @interface Branch
 * @description Represents a branch object.
 * 
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for a branch.
 *           example: "550e8400-e29b-41d4-a716-446655440000"
 *         name:
 *           type: string
 *           description: The name of the branch.
 *           example: "Main Branch"
 *         address:
 *           type: string
 *           description: The address of the branch.
 *           example: "123 Library St, New York, NY"
 *         phone:
 *           type: string
 *           pattern: "^\+?[1-9]\d{1,14}$"
 *           description: The contact phone number of the branch (E.164 format).
 *           example: "+1234567890"
 */
export type Branch = {
    id: string;
    name: string;
    address: string;
    phone: string;
};
