module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    // OFF
    "no-restricted-exports": 0,
    "no-return-assign": 0,
    "react/button-has-type": 0,
    "import/no-import-module-exports": 0,
    "consistent-return": 0,
    "default-param-last": 0,
    "no-unsafe-optional-chaining": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-underscore-dangle": 0,
    "prefer-destructuring": 0,
    "lines-between-class-members": 0,
    "no-await-in-loop": 0,
    camelcase: 0,
    "no-continue": 0,
    "guard-for-in": 0,
    "global-require": 0,
    "no-param-reassign": 0,
    "func-names": 0,
    "no-use-before-define": 0,

    "max-classes-per-file": 0,

    // WARN
    "no-console": [1, { allow: ["assert"] }],
    "no-debugger": 1,
    "no-unused-vars": 1,
    "arrow-body-style": 1,
    "valid-jsdoc": [1],
    "prefer-const": 1,
    "import/first": 1,
    "import/order": 1,
    "object-shorthand": 1,
    "require-await": 1,

    // ERROR
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-unused-expressions": [2, { allowTaggedTemplates: true }],
    "no-restricted-syntax": [2, "WithStatement"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src", "src/web"],
        extensions: [".js"],
      },
    },
  },
  env: {
    browser: true,
    node: true
  }
};
