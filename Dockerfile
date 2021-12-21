FROM node:alpine as builder
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html

# docker build -f Dockerfile -t docker-prac-fe .
# docker run -d --name docker-prac-fe -p 3000:3000 docker-prac-fe