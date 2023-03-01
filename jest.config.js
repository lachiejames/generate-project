module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/(coverage|dist).*/"],
  coveragePathIgnorePatterns: [
    // Tested via E2E, but coverage is not produced
    "<rootDir>/src/scaffold/runPostScaffoldSteps.ts",
    "<rootDir>/src/cli/setupCli.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
