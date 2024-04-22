
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
FROM nginx:alpine
COPY --from=dist /app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]