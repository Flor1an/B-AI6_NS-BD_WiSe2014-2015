#!/bin/bash

function info(){
	echo -e "\n###" $1 "###";
}

clear;

info User;
whoami;

info Java;
java -version;

info Python3;
python3 --version;

info Hashkell;
ghci --version;

info Redis;
redis-server --version;

info Neo4j
service neo4j-service status

info MongoDB
mongod --version
