FROM guacamole/guacd
RUN mkdir -p /opt/rdp-web-server /opt/rdp-web-server/dist
ADD rdp-web-server  /opt/rdp-web-server/
ADD dist /opt/rdp-web-server/dist/
RUN chmod +x /opt/rdp-web-server/rdp-web-server
EXPOSE 4567

CMD ["/opt/rdp-web-server/rdp-web-server"]