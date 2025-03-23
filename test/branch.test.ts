import request from "supertest";
import app from "../src/app";
import {
    getAllBranches,
    createBranch,
    updateBranch,
    deleteBranch,
    getBranchById,
} from "../src/api/v1/controllers/branchControllers";

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

jest.mock("../src/api/v1/controllers/branchControllers", () => ({
    getAllBranches: jest.fn((req, res) => res.status(200).send()),
    createBranch: jest.fn((req, res) => res.status(201).send()),
    updateBranch: jest.fn((req, res) => res.status(200).send()),
    deleteBranch: jest.fn((req, res) => res.status(200).send()),
    getBranchById: jest.fn((req, res) => res.status(200).send()),
}));

describe("Branch Routes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("GET /api/v1/branches", () => {
        it("should call getAllBranches controller", async () => {
            await request(app).get("/api/v1/branches");
            expect(getAllBranches).toHaveBeenCalled();
        });
    });

    describe("POST /api/v1/branches", () => {
        it("should call createBranch controller", async () => {
            const mockBranch = {
                name: "Main Branch",
                address: "123 Library St, NY",
                phone: "+1234567890",
            };

            await request(app).post("/api/v1/branches").send(mockBranch);
            expect(createBranch).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/branches/:id", () => {
        it("should call getBranchById controller", async () => {
            await request(app).get("/api/v1/branches/1");
            expect(getBranchById).toHaveBeenCalled();
        });
    });
});
