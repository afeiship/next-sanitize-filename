(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
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
