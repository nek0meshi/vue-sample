#!/bin/sh

## Set up Amazon Linux

## Install utilities

sudo passwd ec2-user

sudo yum -y install zsh screen git emacs

curl -Lo install.sh https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh
sh install.sh

echo "escape ^Tt" > ~/.screenrc

## Install Docker

sudo yum -y install docker

sudo service docker start

sudo usermod -aG docker ec2-user

sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose
