#!/bin/bash
export NODE_PORT=$(kubectl get services/hello -o go-template='{{(index .spec.ports 0).nodePort}}')
echo NODE_PORT=$NODE_PORT
