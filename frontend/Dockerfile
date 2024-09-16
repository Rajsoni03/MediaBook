# pull official base image
FROM node:21.7.1-slim

# set work directory
WORKDIR /app/frontend

# add to $PATH
# ENV PATH /app/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install 2>&1

# add app
COPY . .

# start the server
CMD ["npm", "run", "dev"]

v21.7.1