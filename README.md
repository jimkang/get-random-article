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
