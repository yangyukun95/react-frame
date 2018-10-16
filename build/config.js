const path = require('path');

const getPath = pathStr => path.resolve(__dirname, pathStr);

module.exports = {
  buildPath: getPath('./'),
  srcPath: getPath('../src'),
  distPath: getPath('../dist'),
  templatePath: getPath('../public/index.html'),
};
