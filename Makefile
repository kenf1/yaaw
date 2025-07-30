.PHONY: install_fmt fmt clean init

install_fmt: #Install prettier
	npm install --save-dev --save-exact prettier

fmt: #Format
	npx prettier . --write

clean: fmt #Tidy repo
	find . -type d -name "node_modules" | xargs rm -rf

init: #Create new action folder
	sh ./setup/action_init.sh