module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    "react-hooks/exhaustive-deps":'off',
  },
};
