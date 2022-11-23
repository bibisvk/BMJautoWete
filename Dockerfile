FROM nginx
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/pozicovna-aut/ /usr/share/nginx/html
