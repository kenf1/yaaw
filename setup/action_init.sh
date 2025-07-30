#!/bin/bash

read -p "Enter action folder name: " folder_name
mkdir -p "$folder_name"

cd "$folder_name" && \
    mkdir src && \
    touch action.yml