KARMA = ./node_modules/.bin/karma start test/karma.conf.js --browsers Firefox --single-run

install:; @npm install

test: test.dev test.min
test.dev:; @${KARMA}
test.min:; @MINIFY=true ${KARMA}

.PHONY: install test test.dev test.min