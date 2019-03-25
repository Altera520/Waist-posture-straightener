FROM arm32v7/node:8
MAINTAINER sencom1028@gmail.com
ENV NRFGIT https://github.com/nRF24

#&& chown -R node:node /home/node/app

#explicit set work dir
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app


#copy package.json && package-lock.json
COPY package*.json ./

#switch user to node
USER root

RUN npm install
#RUN npm i -g mysql
#RUN npm i -g sequelize-auto
#RUN sequelize-auto -o "./models" -d waist -h localhost -u root -p 3307 -e mariadb


COPY --chown=node:node . .

EXPOSE 3000
CMD ["npm","start"]
