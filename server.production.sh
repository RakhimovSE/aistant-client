#!/bin/bash

if [ -f .env.local ]; then
  export $(echo $(cat .env.local | sed 's/#.*//g'| xargs) | envsubst)
fi

next start --hostname $HOSTNAME --port $PORT