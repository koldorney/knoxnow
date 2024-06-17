FROM node:20-alpine
# Allows for native compiling of js packages
RUN apk add g++ make py3-pip
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY .. .
# Generalizes Node version.
RUN npm rebuild
RUN npm run build
ENV DB_CONNECTION_STRING=db;
EXPOSE 3000
CMD ["node", "build"]