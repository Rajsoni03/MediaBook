#!/bin/bash

# Fetch the latest code from github
git pull

# Build and Run the new container
docker-compose build

# Save log files
docker logs django-backend > ../logs/django-backend-$(date "+%b_%d_%Y_%H_%M_%S").log 2>&1
docker logs react-frontend > ../logs/react-frontend-$(date "+%b_%d_%Y_%H_%M_%S").log 2>&1
docker logs postgres-db > ../logs/postgres-db-$(date "+%b_%d_%Y_%H_%M_%S").log 2>&1
docker logs nginx-server > ../logs/nginx-server-$(date "+%b_%d_%Y_%H_%M_%S").log 2>&1

# Stop old containers
docker stop django-backend
docker stop react-frontend
docker stop nginx-server
docker stop postgres-db

# again check and shutdown the container 
docker-compose down

# Launch new container
docker-compose up -d