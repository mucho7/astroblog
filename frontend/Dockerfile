FROM nginx

RUN rm -rf /etc/nginx/conf.d

COPY conf /etc/nginx

COPY public /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
