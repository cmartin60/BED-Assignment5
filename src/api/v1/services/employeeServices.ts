/**
 * Employee Service (employeeService.ts)
 *
 * This file defines functions (services) for managing employee data. These functions
 * now interact with Firestore instead of storing data in-memory.
 */

import { Employee } from "../models/employeeModel";
import {
    getDocuments,
    createDocument,
    updateDocument,
    deleteDocument,
    getDocumentById,
} from "../repositories/firestoreRepository";

const COLLECTION = "employees";

/**
 * @description Get all employees.
 * @returns {Promise<Employee[]>}
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
    const snapshot: FirebaseFirestore.QuerySnapshot = await getDocuments(COLLECTION);
    return snapshot.docs.map((doc) => {
        const data: FirebaseFirestore.DocumentData = doc.data();
        return { id: doc.id, ...data } as Employee;
    });
};

/**
 * @description Get an employee by ID.
 * @param {string} id - The ID of the employee to retrieve.
 * @returns {Promise<Employee | null>}
 */
export const getEmployeeById = async (id: string): Promise<Employee | null> => {
    const doc = await getDocumentById(COLLECTION, id);
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Employee;
};

/**
 * @description Create a new employee.
 * @param {Partial<Employee>} employee - The employee data.
 * @returns {Promise<Employee>}
 */
export const createEmployee = async (employee: Partial<Employee>): Promise<Employee> => {
    const id: string = await createDocument(COLLECTION, employee);
    return { id, ...employee } as Employee;
};

/**
 * @description Update an existing employee.
 * @param {string} id - The ID of the employee to update.
 * @param {Partial<Employee>} employee - The updated employee data.
 * @returns {Promise<Employee>}
 * @throws {Error} If the employee with the given ID is not found.
 */
export const updateEmployee = async (id: string, employee: Partial<Employee>): Promise<Employee> => {
    await updateDocument(COLLECTION, id, employee);
    return { id, ...employee } as Employee;
};

/**
 * @description Delete an employee.
 * @param {string} id - The ID of the employee to delete.
 * @returns {Promise<void>}
 * @throws {Error} If the employee with the given ID is not found.
 */
export const deleteEmployee = async (id: string): Promise<void> => {
    await deleteDocument(COLLECTION, id);
};
