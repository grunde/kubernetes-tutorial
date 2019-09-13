#!/bin/bash
REPLICAS=$1
kubectl scale deployments/hello --replicas=$REPLICAS
