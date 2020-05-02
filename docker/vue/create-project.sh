#!/bin/sh

cd `dirname $0`

docker-compose --project-dir ../.. run --rm vue \
    vue create frontend