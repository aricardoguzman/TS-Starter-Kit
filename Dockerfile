FROM nginx

WORKDIR /var/www/auctions
COPY dist /dist
COPY index.html .

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/conf.d/examplessl.conf
COPY default.conf /etc/nginx/conf.d

