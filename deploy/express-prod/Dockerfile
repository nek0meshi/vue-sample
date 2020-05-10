FROM node:12.16.2-alpine AS backend

COPY ./backend /backend

WORKDIR /backend

RUN yarn --prod

EXPOSE 9010

CMD [ "yarn", "start" ]
