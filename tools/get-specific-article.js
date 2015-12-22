var Mediawiki = require('nodemw');

if (process.argv.length < 3) {
  console.log('Usage: node get-specific-article.js <topic> <language>');
  process.exit();
}

var topic = process.argv[2];
var language = 'en';
if (process.argv.length > 3) {
  language = process.argv[3];
}

var wikipedia = new Mediawiki({
  server: language + '.wikipedia.org',
  path: '/w',
  debug: false
});

wikipedia.getArticle(topic, logArticle);

function logArticle(error, article) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(article);
  }
}
