sudo apt-get update
sudo apt-get upgrade

# User
sudo adduser nosql
sudo adduser nosql sudo

# Java
sudo apt-get install default-jdk

# Hashkell
sudo apt-get install haskell-platform

# Redis
sudo apt-get install redis-server

# Neo4j
sudo wget -O - http://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
sudo echo 'deb http://debian.neo4j.org/repo stable/' > /etc/apt/sources.list.d/neo4j.list
sudo apt-get update
sudo apt-get install neo4j

# MongoDB
sudo echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
apt-get update
sudo apt-get install -y mongodb-org --force-yes
