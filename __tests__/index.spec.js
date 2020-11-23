(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.sanitizeFilename', function () {
      const str = '牛津英语(牛津上海版)1A(一年级上册)(2007年08月第1版)';
      expect(
        nx.sanitizeFilename(str, {
          items: [
            [/\(/g, '_'],
            [/\)/g, '_']
          ]
        })
      ).toBe('牛津英语_牛津上海版_1A_一年级上册__2007年08月第1版_');
    });
  });
})();
