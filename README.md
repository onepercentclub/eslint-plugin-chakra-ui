# eslint-plugin-chakra-ui

[![npm](https://img.shields.io/npm/v/eslint-plugin-chakra-ui)](https://www.npmjs.com/package/eslint-plugin-chakra-ui)
[![license](https://img.shields.io/npm/l/eslint-plugin-chakra-ui)](https://github.com/Monchi/eslint-plugin-chakra-ui/blob/master/LICENSE)

ESLint rules for [Chakra UI](https://chakra-ui.com/) (with TypeScript for now).

## **Requirement**

Currently, this plugin only works with TypeScript, but not with JavaScript, because it depends on `@typescript-eslint/parser`.

TypeScript 4.4 or higher is supported.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-chakra-ui` and `@typescript-eslint/parser`:

```sh
npm install eslint-plugin-chakra-ui @typescript-eslint/parser --save-dev
```

Then set the `parser` property and add `chakra-ui` to the `plugins` property of your `.eslintrc` configuration file:

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["chakra-ui"]
}
```

Now you can add chakra-ui rules:

```json
{
  "rules": {
    "chakra-ui/props-order": "error",
    "chakra-ui/props-shorthand": "error"
  }
}
```

## Supported Rules

Every rule is fixable with `eslint --fix`.

- [`props-order`](https://github.com/Monchi/eslint-plugin-chakra-ui/blob/master/docs/rules/props-order.md): Enforce semantic order of properties.
- [`props-shorthand`](https://github.com/Monchi/eslint-plugin-chakra-ui/blob/master/docs/rules/props-shorthand.md): Enforce using shorthand property or not.

## Prior Art

This plugin is inspired by [eslint-plugin-tailwind-css](https://github.com/francoismassart/eslint-plugin-tailwindcss).
