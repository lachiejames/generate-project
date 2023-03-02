module.exports = {
  root: true,
  ignorePatterns: ["**/coverage/**", "**/dist/**", "**/node_modules/**", "**/tempTestDir/**"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "import", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
  },
  rules: {
    // Unused vars are allowed, but must start with an underscore.  Useful for unused function arguments.
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "unused-imports/no-unused-imports": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "func-style": ["warn", "declaration"],
    "import/no-useless-path-segments": [
      "warn",
      {
        noUselessIndex: true,
        commonjs: true,
      },
    ],
  },
};
