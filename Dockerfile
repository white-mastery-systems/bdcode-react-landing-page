FROM node:20-bullseye AS builder

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json \
    && npm install \
    && npm install @tailwindcss/oxide-linux-x64-gnu

COPY . .

RUN npm run build


FROM node:20-bullseye

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

# 🔥 DO NOT prune until config fixed
# RUN npm prune --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
