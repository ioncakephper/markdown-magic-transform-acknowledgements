# markdown-magic-transform-acknowledgements

<!-- doc-gen BADGES -->

[![npm version](https://img.shields.io/npm/v/markdown-magic-transform-acknowledgements.svg)](https://www.npmjs.com/package/markdown-magic-transform-acknowledgements) [![npm downloads](https://img.shields.io/npm/dw/markdown-magic-transform-acknowledgements.svg)](https://www.npmjs.com/package/markdown-magic-transform-acknowledgements) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.npmjs.com/package/markdown-magic-transform-acknowledgements) [![actions status](https://img.shields.io/github/actions/workflow/status/ioncakephper/markdown-magic-transform-acknowledgements/ci.yml?branch=main)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/actions) [![codecov](https://img.shields.io/codecov/c/github/ioncakephper/markdown-magic-transform-acknowledgements?branch=main)](https://codecov.io/gh/ioncakephper/markdown-magic-transform-acknowledgements) [![release](https://img.shields.io/github/v/release/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/releases) [![maintained](https://img.shields.io/github/commit-activity/y/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/graphs/commit-activity) [![stars](https://img.shields.io/github/stars/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/stargazers) [![forks](https://img.shields.io/github/forks/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/network/members) [![watchers](https://img.shields.io/github/watchers/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/watchers) [![last commit](https://img.shields.io/github/last-commit/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/commits) [![contributors](https://img.shields.io/github/contributors/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/graphs/contributors) [![issues](https://img.shields.io/github/issues/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/issues) [![pull requests](https://img.shields.io/github/issues-pr/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/pulls) [![repo size](https://img.shields.io/github/repo-size/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements) [![top language](https://img.shields.io/github/languages/top/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements) [![languages](https://img.shields.io/github/languages/count/ioncakephper/markdown-magic-transform-acknowledgements)](https://github.com/ioncakephper/markdown-magic-transform-acknowledgements/search?l=)

<!-- end-doc-gen -->

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for details on how to raise issues, propose changes, and submit pull requests. In short:

- Open issues for bugs or feature requests with clear reproduction steps.
- For code contributions, fork the repo, create a branch, add tests, and open a PR against `main`.

## License

This project is licensed under the terms of the MIT License. See the [`LICENSE`](LICENSE) file for details.

## Acknowledgements

<!-- doc-gen ACKNOWLEDGEMENTS -->

- [@eslint/js](https://www.npmjs.com/package/%40eslint%2Fjs) — ESLint JavaScript language implementation
- [@eslint/markdown](https://www.npmjs.com/package/%40eslint%2Fmarkdown) — The official ESLint language plugin for Markdown
- [cross-spawn](https://www.npmjs.com/package/cross-spawn) — Cross platform child_process#spawn and child_process#spawnSync
- [eslint](https://www.npmjs.com/package/eslint) — An AST-based pattern checker for JavaScript.
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json) — eslint plugin for JSON files
- [eslint-plugin-yaml](https://www.npmjs.com/package/eslint-plugin-yaml) — Lint YAML files
- [fs](https://www.npmjs.com/package/fs) — No description available
- [jest](https://www.npmjs.com/package/jest) — Delightful JavaScript Testing.
- [jsonc-eslint-parser](https://www.npmjs.com/package/jsonc-eslint-parser) — JSON, JSONC and JSON5 parser for use with ESLint plugins
- [markdown-eslint-parser](https://www.npmjs.com/package/markdown-eslint-parser) — The ESLint custom parser for \*.md files.
- [markdown-magic](https://www.npmjs.com/package/markdown-magic) — Automatically update markdown files with content from external sources
- [markdown-magic-scripts](https://www.npmjs.com/package/markdown-magic-scripts) — Automatically generate a dynamic, customizable dashboard of your npm scripts in your README.md using this markdown-magic transform. Keep your project documentation in sync with your package.json.
- [markdown-magic-transform-badges](https://www.npmjs.com/package/markdown-magic-transform-badges) — No description available
- [path](https://www.npmjs.com/package/path) — Node.JS path module
- [prettier](https://www.npmjs.com/package/prettier) — Prettier is an opinionated code formatter
- [yaml-eslint-parser](https://www.npmjs.com/package/yaml-eslint-parser) — A YAML parser that produces output compatible with ESLint
<!-- end-doc-gen -->

## Helper Scripts

<!-- doc-gen SCRIPTS format=list -->

- `docs` — Generate documentation by processing README.md with markdown-magic. (line [13](./package.json#L13))

  ```bash
  npx markdown-magic README.md --config ./markdown-magic.config.js
  ```

- `fix` — Automatically fix linting issues and format codebase. (line [8](./package.json#L8))

  ```bash
  npm run lint:fix && npm run format && npm run format:package
  ```

- `format` — Format all project files using Prettier. (line [9](./package.json#L9))

  ```bash
  prettier --write .
  ```

- `format:package` — Format the package.json file using Prettier. (line [10](./package.json#L10))

  ```bash
  prettier --write package.json
  ```

- `lint` — Lint all project files to ensure code quality and consistency. (line [11](./package.json#L11))

  ```bash
  eslint . --ext .js,.json,.yaml,.yml,.md
  ```

- `lint:fix` — Lint all project files and automatically fix issues where possible. (line [12](./package.json#L12))

  ```bash
  eslint . --ext .js,.json,.yaml,.yml,.md --fix
  ```

- `prep` — Prepare the project for publishing by generating docs and formatting code. (line [14](./package.json#L14))

  ```bash
  npm run docs && npm run fix
  ```

- `test` — Run the test suite using Jest. (line [7](./package.json#L7))

  ```bash
  jest --passWithNoTests
  ```

  <!-- end-doc-gen -->

## Project Structure

<!-- doc-gen fileTree -->

```
└── markdown-magic-transform-acknowledgements/
    ├── .prettierrc.json
    ├── CONTRIBUTING.md
    ├── eslint.config.mjs
    ├── index.js
    ├── LICENSE
    ├── markdown-magic.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── RULES_OF_CONDUCT.md
```

<!-- end-doc-gen -->
