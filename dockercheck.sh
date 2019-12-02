#!/bin/bash

docker container ls -qf name=myweb;

status=$?

if [$status -ne 0]; then
echo "container found"
else
echo "not"
fi
