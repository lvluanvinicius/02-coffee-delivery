FROM ubuntu

RUN apt update && apt install -y curl && apt clean 

RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh &&\
    bash /tmp/nodesource_setup.sh && apt update && apt install -y nodejs && npm install -g pnpm concurrently && apt clean

RUN mkdir /app

WORKDIR /app

COPY ../ ./

RUN pnpm install

EXPOSE 30001

CMD ["concurrently", "npm run dev", "npm run dev:server"]
