FROM public.ecr.aws/bitnami/node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g nodemon

RUN npm install -f

COPY ./ ./

EXPOSE 5001

CMD ["npm", "run", "dev"]