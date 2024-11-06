import pluginJs from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import pluginReact from "eslint-plugin-react"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import eslintignore from "./eslint.ignore.js"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
    },
  },
  {
    ignores: eslintignore,
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            [
              "^(node:|vite)",
              "^react",
              "^@?\\w",
              "^@/components",
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
              "^@(utils|store|hooks|api|router)",
            ],
            ["antd/locale/zh_CN", "dayjs/locale/zh-cn"],
            ["^.+\\.s?css$"],
          ],
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
]
