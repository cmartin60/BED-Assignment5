import request from "supertest";
import app from "../src/app";

describe("Logical Operations API", () => {
    let branchId: string = "1";
    let department: string = "IT";

    it("should get all employees for a specific branch", async () => {
        const response = await request(app).get(`/api/v1/branches/${branchId}/employees`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
    });

    it("should get all employees for a specific department", async () => {
        const response = await request(app).get(`/api/v1/departments/${department}/employees`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
    });
});
