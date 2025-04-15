FROM node:23.11.0-alpine3.21 AS build

WORKDIR /app
COPY package*.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:1.27.4-alpine3.21

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

WORKDIR /app
EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
