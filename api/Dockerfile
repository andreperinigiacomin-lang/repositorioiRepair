FROM node:22-alpine
WORKDIR /app
COPY package*.json ./

COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN npm ci

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]