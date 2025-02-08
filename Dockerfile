FROM denoland/deno:alpine
WORKDIR /app

COPY . .
RUN deno install --lock=deno.lock

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["deno", "run", "--allow-net", "--allow-read", "--watch", "dev"]
