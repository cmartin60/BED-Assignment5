import request from "supertest";
import app from "../src/app";

jest.mock("../config/firebaseConfig", () => ({
    firestore: jest.fn().mockReturnValue({
        collection: jest.fn().mockReturnThis(),
        doc: jest.fn().mockReturnThis(),
        get: jest.fn().mockResolvedValue({ exists: true, data: () => ({}) }),
        set: jest.fn().mockResolvedValue(null),
        update: jest.fn().mockResolvedValue(null),
        delete: jest.fn().mockResolvedValue(null),
    }),
}));

describe("Health Check Endpoint", () => {
    it("should return 200 OK on GET /health", async () => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Server is healthy");
    });
});
