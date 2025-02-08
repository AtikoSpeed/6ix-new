FROM denoland/deno AS base
WORKDIR /app

COPY package.json deno.lock ./

FROM base AS prod-deps
RUN deno install --omit=dev

FROM base AS build-deps
RUN deno install

FROM build-deps AS build
COPY . .
RUN deno run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs