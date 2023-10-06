module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "perfectionist"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "perfectionist/sort-imports": [
      "warn",
      {
        type: "alphabetical",
        order: "asc",
        groups: [
          "type",
          "react",
          "nanostores",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "side-effect",
          "style",
          "object",
          "unknown",
        ],
        "custom-groups": {
          value: {
            react: ["react", "react-*"],
            nanostores: "@nanostores/**",
          },
          type: {
            react: "react",
          },
        },
        "newlines-between": "always",
        "internal-pattern": [
          "src/ui/**",
          "src/feature/**",
          "src/services/**",
          "src/utils/**",
        ],
      },
    ],
  },
};
