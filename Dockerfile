FROM guacamole/guacd
COPY dir:./rdp-web-server in /opt/rdp-web-server/rdp-web-server
COPY dir:./dist in /opt/rdp-web-server/

EXPOSE 4567

CMD ["/bin/sh" "-c" "/usr/local/guacamole/sbin/guacd  && /opt/rdp-web-server/rdp-web-server"]