### build ###
FROM node:16.10.0-alpine3.14 AS builder
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# use npm ci to ensure strict adherance to 'version contract' in package-lock.json
RUN npm ci --only=production 
# copy files into build context to support build
COPY . .
RUN npm run build


### finalize ###
FROM nginx:1.21.3-alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]