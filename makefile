# makefile for generating/deploying the MARKET Protocol static site

# settings
CUSTOM_CONTENT=MARKETProtocol-custom
STATIC_CONTENT=MARKETProtocol-static
DEV_PROFILE_NAME=marketprotocol-dev-rw
DEV_BUCKET=s3://dev.website.marketprotocol.io

default:
	pwd


## prerequisites

# node path, if not otherwise set
# NODE_PATH=/usr/local/lib/node_modules/npm/node_modules

# initial installation
install:
	npm install update-notifier
	npm install -g react-static

# update npm, if needed
update_npm:
	npm i npm

# initial project creation
#   site name: MARKETProtocol-static
#   template: apollo
initialize:
	react-static create


## local deployment

# copy custom content into the generated/static path
update:
	cp -a MARKETProtocol-custom/* $(STATIC_CONTENT)


## testing

# start the development server (then connect to http://localhost:3000)
start:
	cd $(STATIC_CONTENT) ; npm run start

# build for deployment
build:
	cd $(STATIC_CONTENT) ; npm run build

# test a build locally
serve:
	cd $(STATIC_CONTENT) ; npm run server


## remote deployment 


# DEV - display contents of deployed site
ls_dev:
	aws s3 --profile $(DEV_PROFILE_NAME) ls $(DEV_BUCKET)

# DEV - remove deployed site from s3 bucket
rm_dev:
	aws s3 --profile $(DEV_PROFILE_NAME) rm $(DEV_BUCKET)/dev --recursive

# DEV - deploy site to s3 bucket
deploy_dev:
	aws s3 --profile $(DEV_PROFILE_NAME) cp $(STATIC_CONTENT)/dist/ $(DEV_BUCKET) --recursive

