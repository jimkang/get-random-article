get-random-article
==================

Gets a random Wikipedia article in Wikitext (instead of HTML).

Installation
------------

    npm install get-random-article

Usage
-----

    var getRandomArticle = require('get-random-article');
    var opts = {
      language: 'en'
    };
    getRandomArticle(opts, logArticle);

    function logArticle(error, articleText) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(articleText)
      }
    }

Output:

    {{italic title}}
    The '''''Bauer Lexicon''''' is among the most highly respected dictionaries of [[Biblical Greek]].<ref>Rykle Borger, "Remarks of an Outsider about Bauer's Wörterbuch, BAGD, BDAG, and Their Textual Basis," Biblical Greek Language and Lexicography: Essays in Honor of Frederick W. Danker, Bernard A. Taylor (et al. eds.) pp. 32–47.</ref> The producers of the German forerunner are Preuschen and Bauer. The English edition is '''''A Greek-English Lexicon of the New Testament and Other Early Christian Literature''''' (the Third Edition was published in 2001 by [[The University of Chicago Press]]; ISBN 0226039331).

    == History ==

    The origin may be traced to Preuschen's ''Vollständiges Griechisch-Deutsches Handwörterbuch zu den Schriften des Neuen Testaments und der übrigen urchristlichen Literatur'' (1910).<ref>{{Cite journal | doi = 10.1515/zatw.1908.28.4.U | title =  Vollständiges Griechisch-Deu
    ...

If you want to use a Wikipedia that is not on wikipedia.org, you need to specify `wikipediaProtocol` and `wikipediaDomain` params in the opts. e.g.:

    {
      wikipediaProtocol: 'http',
      wikipediaDomain: 'bulbapedia.bulbagarden.net'
    }

There is also a command line utility, `get-specific-article.js`, for grabbing specific articles in this repo. The first parammeter is the topic to get, and the second is the language (e.g. "en", "es", "simple", etc.) for the Wikipedia to retrieve the article from.

    node tools/get-specific-article.js "foundation (nonprofit)" simple

Output:

    A '''foundation''' is a kind of [[company]] set up to carry out [[charity (practice)|charity]] or [[research]] work. A foundation is usually [[endowed]], which means it is given a large sum of [[money]] to do its work. An example is the [[Rockefeller Foundation]]. The [[Rockefeller family]] made their money from [[banking]] and [[oil]] and their family foundation is endowed with a very great sum of money. The people running the foundation think of ways to use the money to help charities, the arts, or whatever they like.

    Another example is the [[Bill & Melinda Gates Foundation]]. Bill Gates made a [[Wealth|fortune]] from [[Microsoft]]. He and his wife now spend nearly all their time giving away the money he has made. They give it to [[project]]s like [[education]] in the [[United States]] and treating [[AIDS]] in [[Third World]] countries.

    ==Other websites==
    {{commons cat-inline|Foundations (organizations)}}

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
