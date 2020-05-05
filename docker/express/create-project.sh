#!/bin/sh

docker-compose run --rm express \
  ash -c "mkdir backend; cd backend; yarn init; yarn add express;"