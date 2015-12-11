var Mediawiki = require('nodemw');
// var jsonfile = require('jsonfile');
// var probable = require('probable');
var request = require('request');

function getRandomArticle(opts, done) {
  // var topics = jsonfile.readFileSync(__dirname + '/data/topics.json');
  var language;
  if (opts) {
    language = opts.language;
  }

  if (!language) {
    language = 'en';
  }

  var randomURL = 'https://' + language + '.wikipedia.org/wiki/Special:Random';
  var requestOpts = {
    url: randomURL,
    followRedirects: false
  };
  request(requestOpts, parseResponse);

  function parseResponse(error, response, body) {
    if (error) {
      done(error);
    }
    else {
      var randomTopic = getLast(decodeURI(response.req.path)).replace('_', ' ');
      debugger;
      var wikipedia = new Mediawiki({
        server: language + '.wikipedia.org',
        path: '/w',
        debug: false
      });

      wikipedia.getArticle(randomTopic, done);
      // done(error, body);
    }
  }
}

function getLast(path) {
  var parts = path.split('/');
  if (parts.length > 0) {
    return parts[parts.length - 1];
  }
}

module.exports = getRandomArticle;
