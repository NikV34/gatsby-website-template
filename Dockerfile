FROM node:14-buster as build
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn
RUN gatsby build
RUN ls -la /app/public
##
FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
