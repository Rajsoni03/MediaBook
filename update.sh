#!/bin/bash

# fetch the latest code from github
git pull

#  Build the container
docker-compose build
