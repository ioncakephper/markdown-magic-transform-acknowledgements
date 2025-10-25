module.exports = {
  transforms: {
    BADGES: require('markdown-magic-transform-badges'),
    SCRIPTS: require('markdown-magic-scripts'),
    ACKNOWLEDGEMENTS: require('./index.js'),
    treeFileExtended: require('markdown-magic-transform-treefile-extended'),
  },
};
