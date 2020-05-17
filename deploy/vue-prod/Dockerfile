FROM node:12.16.2-alpine AS frontend

COPY ./frontend /frontend

WORKDIR /frontend

RUN yarn && yarn build


FROM nginx:alpine

COPY --from=frontend /frontend/dist /app

COPY ./docker/vue/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
