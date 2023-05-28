FROM ocm-data-miner-base-img:nx-dev AS builder

ARG NODE_ENV=production

WORKDIR /app/builder

COPY . .

RUN npx nx build ocm-data-importer

FROM ocm-data-miner-base-img:nx-dev

WORKDIR /app
COPY --from=builder /app/builder ./


ENV NODE_ENV=$NODE_ENV


CMD ["node", "./dist/apps/ocm-data-importer/main.js"]
