FROM node:6.14.2
EXPOSE 8080
COPY src /src
CMD node /src/server.js