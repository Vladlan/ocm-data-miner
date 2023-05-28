FROM ocm-data-miner-base-img:nx-dev AS builder

ARG NODE_ENV=production
ARG PORT=3333

WORKDIR /app/builder
EXPOSE ${PORT}

COPY . .

RUN npx nx build cm-api

FROM ocm-data-miner-base-img:nx-dev

WORKDIR /app
COPY --from=builder /app/builder ./


ENV NODE_ENV=$NODE_ENV
ENV PORT=${PORT}


CMD ["node", "./dist/apps/cm-api/main.js"]
