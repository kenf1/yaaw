FROM node:24.4.1-slim

RUN apt-get update && apt-get install -y git \
	make
RUN export NODE_OPTIONS="--metrics=0"