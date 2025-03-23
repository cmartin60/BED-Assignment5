/**
 * HTTP Status Codes
 *
 * This constant object defines commonly used HTTP status codes 
 * to improve readability and maintainability throughout the application.
 *
 * @constant {Object} HTTP_STATUS
 * @property {number} OK - HTTP 200: The request was successful.
 * @property {number} CREATED - HTTP 201: A new resource was successfully created.
 * @property {number} BAD_REQUEST - HTTP 400: The request was invalid or cannot be served.
 * @property {number} UNAUTHORIZED - HTTP 401: The request lacks valid authentication credentials.
 * @property {number} FORBIDDEN - HTTP 403: The client does not have access rights to the content.
 * @property {number} NOT_FOUND - HTTP 404: The requested resource could not be found.
 * @property {number} CONFLICT - HTTP 409: The request conflicts with the current state of the resource.
 * @property {number} INTERNAL_SERVER_ERROR - HTTP 500: An unexpected error occurred on the server.
 *
 * @example
 * import { HTTP_STATUS } from "./httpConstants";
 *
 * res.status(HTTP_STATUS.OK).json({ message: "Request successful" });
 */
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
} as const;
