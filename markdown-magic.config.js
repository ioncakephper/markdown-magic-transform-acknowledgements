module.exports = {
  transforms: {
    BADGES: require('markdown-magic-transform-badges'),
    SCRIPTS: require('markdown-magic-scripts'),
    ACKNOWLEDGEMENTS: require('./index.js'),
    treeFileExtended: require('markdown-magic-transform-treefile-extended'),
  },
  transformDefaults: {
    treeFileExtended: {
      '_file_descriptions.json':
        'A file containing descriptions for each file in the project.',
      '.gitignore':
        'A file that specifies intentionally untracked files that Git should ignore.',
      '.prettierrc.json':
        'A configuration file for Prettier, a code formatter.',
      'CHANGELOG.md':
        'A file that contains a curated, chronological list of notable changes for each version of a project.',
      'CONTRIBUTING.md':
        'A file that provides guidelines for how to contribute to the project.',
      'eslint.config.mjs':
        'A configuration file for ESLint, a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.',
      'index.js':
        'The main entry point of the application, containing the logic for the markdown-magic transform.',
      LICENSE:
        'A file that contains the license for the project (MIT License).',
      'markdown-magic.config.js':
        'A configuration file for markdown-magic, a tool for automatically updating markdown files.',
      'package-lock.json':
        'A file that records the exact version of each installed dependency.',
      'package.json':
        'A file that contains metadata about the project and its dependencies.',
      'README.md': 'A file that provides a high-level overview of the project.',
      'RULES_OF_CONDUCT.md':
        'A file that outlines the rules of conduct for contributors to the project.',
      '.github/workflows/ci.yml':
        'A GitHub Actions workflow file for continuous integration.',
      '.github/workflows/release-please.yml':
        'A GitHub Actions workflow file for automating releases.',
    },
  },
};
