test:
	node tests/functional/basic-functional-test.js

pushall:
	git push origin master && npm publish
