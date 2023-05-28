FROM node:18.15.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN cd ./src/ && touch wundergraph.config.ts && wundergraph.server.ts

EXPOSE 9991

ENV WG_DIR_ABS=/app/
ENV WG_NODE_HOST=0.0.0.0

CMD ["npm","start"]