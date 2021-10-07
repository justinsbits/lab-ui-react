# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app

# install application dependencies
COPY package.json .
COPY package-lock.json .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
RUN npm install react-scripts@3.4.1 -g
# RUN npm install -g npm@7.24.2

COPY . .

EXPOSE 8080

CMD ["npm", "start"]