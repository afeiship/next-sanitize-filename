/*!
 * name: @jswork/next-sanitize-filename
 * description: Sanitize a string to be safe for use as a filename by removing customize list.
 * homepage: https://github.com/afeiship/next-sanitize-filename
 * version: 1.0.0
 * date: 2020-11-23 14:34:48
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxArrayReplace = nx.arrayReplace || require('@jswork/next-array-replace');
  var sf = require('sanitize-filename');
  var DEFAULT_OPTIONS = { items: [] };

  nx.sanitizeFilename = function (inString, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var sfRes = sf(inString, inOptions);
    return nxArrayReplace(sfRes, options.items);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sanitizeFilename;
  }
})();
