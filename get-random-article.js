var Mediawiki = require('nodemw');
var request = require('request');

function getRandomArticle(opts, done) {
  // var topics = jsonfile.readFileSync(__dirname + '/data/topics.json');
  var language;
  var wikipediaDomain;
  var wikipediaProtocol;

  if (opts) {
    language = opts.language;
    wikipediaDomain = opts.wikipediaDomain;
    wikipediaProtocol = opts.wikipediaProtocol;
  }

  if (!language) {
    language = 'en';
  }

  var randomURL;

  if (wikipediaDomain && wikipediaProtocol) {
    randomURL = wikipediaProtocol + '://' + wikipediaDomain +
      '/wiki/Special:Random';
  }
  else if (language) {
    randomURL = 'https://' + language + '.wikipedia.org/wiki/Special:Random';
  }

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
      var mwOpts = {
        server: language + '.wikipedia.org',
        path: '/w',
        debug: false
      };

      if (wikipediaDomain) {
        mwOpts.server = wikipediaDomain;
      }

      var wikipedia = new Mediawiki(mwOpts);
      wikipedia.getArticle(randomTopic, done);
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
