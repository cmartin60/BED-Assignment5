import Joi, { ObjectSchema } from "joi";

export const branchSchema: ObjectSchema = Joi.object({
    id: Joi.string().optional().messages({ "string.empty": "Branch ID cannot be empty" }),
    name: Joi.string().required().messages({
        "any.required": "Branch name is required",
        "string.empty": "Branch name cannot be empty",
    }),
    address: Joi.string().required().messages({
        "any.required": "Address is required",
        "string.empty": "Address cannot be empty",
    }),
    phone: Joi.string()
        .pattern(/^\+?[1-9]\d{1,14}$/)
        .required()
        .messages({
            "any.required": "Phone number is required",
            "string.empty": "Phone number cannot be empty",
            "string.pattern.base": "Invalid phone number format",
        }),
});