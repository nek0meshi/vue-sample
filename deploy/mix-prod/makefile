cert-create:
	docker-compose exec web certbot certonly --webroot -w /usr/share/nginx/html -d ${DOMAIN} -m ${MAIL} --agree-tos -n