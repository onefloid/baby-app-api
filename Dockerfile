ARG PORT=3000
FROM node:20.9

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE $PORT

ENV ADDRESS=0.0.0.0 PORT=$PORT

CMD ["npm", "start"]