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

docker-build-vue:
	docker build -t vue-sample-vue -f deploy/vue-prod/Dockerfile .

docker-build-express:
	docker build -t vue-sample-express -f deploy/express-prod/Dockerfile .
