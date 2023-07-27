#TODO: Ask to devops for node 16 version
FROM segurosfalabella.azurecr.io/sf/node:14-latest
COPY . .

USER root
run apk update && apk upgrade

RUN npm install
#RUN npm run build


USER node

CMD [ "npm", "run", "start" ]