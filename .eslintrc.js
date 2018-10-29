module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
    "mongo": true,
    "commonjs": true,
    "prototypejs": true
  },
  "rules": {
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0,
    "max-len": ["error", 80],
    "prettier/prettier": "error",
    'no-console': 'off',
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
};