dev:
	cd docker; docker-compose up

serve:
	cd docker; docker-compose exec vue yarn serve

api-serve:
	cd docker;  docker-compose exec express yarn dev

install:
	cd docker; docker-compose exec vue yarn

up-prod:
	cd deploy; docker-compose up --build
