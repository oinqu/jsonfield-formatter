FROM docker.elastic.co/kibana/kibana:8.8.0
RUN /usr/share/kibana/bin/kibana-plugin install https://github.com/oinqu/jsonfield-formatter/raw/refs/heads/main/build/jsonfieldFormatter-8.8.0.zip
RUN /usr/share/kibana/bin/kibana --optimize