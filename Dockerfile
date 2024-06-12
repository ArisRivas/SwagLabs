FROM node:18.0.0

WORKDIR /wdio

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4444

CMD [ "node", "wdio.conf.js" ]
