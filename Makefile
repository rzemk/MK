BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: Template

ready:
	@echo [ready]
	@mkdir -p logs

compile:
	@echo [compile]
	@$(BIN)/babel server -d dst -q
	@$(BIN)/webpack

lint:
	@echo [lint]
	@$(BIN)/eslint client server test -f stylish --color

tests:
	@echo [tests]
	@$(BIN)/istanbul cover --print summary $(BIN)/_mocha -- --recursive -R dot

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'client/**/*.js' 'server/**/*.js' 'test/**/*.js' -c 'make all'

<<<<<<< HEAD
all: main ready compile tests
=======
all: main ready compile lint tests
>>>>>>> 0362676459906d501ef85a587461204dc6bbea10
