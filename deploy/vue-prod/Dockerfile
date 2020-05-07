FROM node:12.16.2-alpine AS frontend

RUN yarn global add @vue/cli

COPY ./frontend /frontend

WORKDIR /frontend

RUN rm -rf node_modules

RUN yarn && yarn build


FROM nginx:alpine

COPY --from=frontend /frontend/dist /app

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
