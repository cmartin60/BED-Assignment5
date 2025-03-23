module.exports = {
    preset: "ts-jest",
    setupFiles: ["<rootDir>/__mocks__/firebase.ts"],
    testEnvironment: "node"
}
// 'preset: "ts-jest"': use ts-jest preset to handle TS files
// 'testEnvironment: "node"': set environment to Node.js