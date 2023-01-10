#Stage 1
FROM node:16.10.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app
COPY yarn.lock .
RUN yarn install
COPY ./src /app/src
COPY ./public /app/public
RUN yarn global add react-scripts@5.0.1
CMD ["yarn", "start"]
RUN yarn build
