FROM node

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
