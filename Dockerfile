FROM guacamole/guacd
RUN mkdir -p /opt/rdp-web-server /opt/rdp-web-server/dist
ADD rdp-web-server  /opt/rdp-web-server/
ADD start.sh  /opt/rdp-web-server/
ADD dist /opt/rdp-web-server/dist/
RUN chmod +x /opt/rdp-web-server/rdp-web-server
RUN chmod +x /opt/rdp-web-server/start.sh
EXPOSE 4567
WORKDIR /opt/rdp-web-server/
# CMD ["/usr/local/guacamole/sbin/guacd b 127.0.0.1 -L info ;" ,"/opt/rdp-web-server/rdp-web-server"]
CMD ["/opt/rdp-web-server/start.sh"]
#CMD ["sleep","300000"]