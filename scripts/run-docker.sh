#!/bin/bash

# build docker image
docker build . -t python/fastapi

# run docker image built above and expose port 8080
docker run -p 8080:8080 --name api -it python/fastapi