FROM node:12.16.2-alpine AS backend

COPY ./backend /backend

WORKDIR /backend

RUN cp .env.production .env

RUN yarn --prod

EXPOSE 9010

CMD [ "yarn", "start" ]
