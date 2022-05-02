FROM node:17.8.0
# RUN addgroup app && adduser -S -G app app
# USER app 
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
RUN npm install -g nodemon
RUN npm install pm2 -g
COPY . .
EXPOSE 4507
CMD ["nodemon", "index.js"]