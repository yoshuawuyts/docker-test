TESTS = test/
WERCKER_DB = /data

all:
	node --harmony ./lib/index.js

db:
	node ./lib/db.js

test:
	@rm -rf ./.leveldb
	@NODE_ENV=test node ./node_modules/mocha/bin/mocha \
	--harmony-generators \
	$(TESTS) \
	--bail

test-wercker:
	@sudo mkdir WERCKER_DB
	@NODE_ENV=test DB=$(WERCKER_DB) node ./node_modules/mocha/bin/mocha \
	--harmony-generators \
	$(TESTS) \
	--bail

demo:
	sh sh/put.sh
	sh sh/get.sh

clean:
	rm -rf _builds _projects _steps .leveldb

.PHONY: test
