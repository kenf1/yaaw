.PHONY: install_fmt fmt clean

install_fmt: #Install prettier
	npm install --save-dev --save-exact prettier

fmt: #Format
	npx prettier . --write

clean: #Tidy repo
	find . -type d -name "node_modules" | xargs rm -rf