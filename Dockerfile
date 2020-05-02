FROM nginx

WORKDIR /var/www/auctions
COPY -R dist/* /var/www/auctions/

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d

