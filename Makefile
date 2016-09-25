BIN := ./node_modules/.bin
TEST_FILES := test/test_helper.js test/**/*_test.js

test:
	@$(BIN)/mocha --colors -R dot $(TEST_FILES)

.PHONY: test
