'use strict';
const path = require('path');
const config = {
  'srcDir': path.join(__dirname, '..', 'webapp'),
  'buildDir': path.join(__dirname, '..', 'build')
};
// const local = {

// };

// if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
//   config = _extend(config, local)
// };
module.exports = config;