FROM node:17.8.0
# RUN addgroup app && adduser -S -G app app
# USER app 
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm", "start"]