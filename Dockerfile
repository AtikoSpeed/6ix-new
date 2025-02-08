FROM denoland/deno:alpine AS base
WORKDIR /app

FROM base AS deps
COPY deno.lock .
COPY package.json .
RUN deno install --lock=deno.lock

FROM deps AS build
COPY . .
RUN deno run build

FROM base AS runtime
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["deno", "run", "--allow-net", "--allow-read", "./dist/server/entry.mjs"]
