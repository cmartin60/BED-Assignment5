import Joi, { ObjectSchema } from "joi";

export const employeeSchema: ObjectSchema = Joi.object({
    id: Joi.string().optional().messages({ "string.empty": "Employee ID cannot be empty" }),
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty",
    }),
    position: Joi.string().required().messages({
        "any.required": "Position is required",
        "string.empty": "Position cannot be empty",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.empty": "Email cannot be empty",
        "string.email": "Invalid email format",
    }),
    branchId: Joi.string().required().messages({
        "any.required": "Branch ID is required",
        "string.empty": "Branch ID cannot be empty",
    }),
});
