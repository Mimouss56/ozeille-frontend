FROM node:22-alpine AS base
USER node
WORKDIR /home/node/app

FROM base AS development
WORKDIR /usr/script

COPY ./docker/entrypoint.sh ./entrypoint.sh
USER root
RUN chmod +x ./entrypoint.sh
USER node
WORKDIR /home/node/app

COPY --chown=node:node . .

EXPOSE 5172
CMD sh /usr/script/entrypoint.sh


# --- Build app for prod ---
FROM base AS build
COPY --chown=node:node . .
RUN npm install
RUN npm run build

# --- Build final --
FROM nginx:alpine AS production
# -- Clean the original folder
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /home/node/app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]