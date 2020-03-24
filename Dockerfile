FROM tiangolo/node-frontend:10 as build-stage
RUN yarn config set registry https://registry.npm.taobao.org
RUN mkdir -p /app
COPY ./ /app/
RUN yarn install && yarn build:dev

FROM nginx:1.15
COPY --from=build-stage /app/dist/ /app/dist
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /app/dist
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
CMD ["nginx", "-g", "daemon off;"]