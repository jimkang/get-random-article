var test = require('tape');
var getRandomArticle = require('../../get-random-article');

var testCases = [
  {
    opts: {
      language: 'simple'
    }
  },
  {
    opts: {
      language: 'en'
    }
  },
  {
    opts: {
      wikipediaProtocol: 'http',
      wikipediaDomain: 'bulbapedia.bulbagarden.net'
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test('Basic functional test', function basicTest(t) {
    getRandomArticle(testCase.opts, checkResult);

    function checkResult(error, article) {
      t.ok(!error, 'No error while getting article.');
      t.ok(article.length > 0, 'Article is longer than 0.');
      t.equal(article.indexOf('<html '), -1, 'Content is WikiText, not html.');
      // console.log(article);
      t.end();
    }
  });
}
