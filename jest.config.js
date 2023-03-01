module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/(coverage|dist).*/"],

  // Tested via E2E, but coverage is not produced
  coveragePathIgnorePatterns: ["<rootDir>/src/scaffold/runPostScaffoldSteps.ts", "<rootDir>/src/cli/setupCli.ts"],

  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
