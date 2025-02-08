FROM denoland/deno:alpine
WORKDIR /app

# Install Node.js
# RUN apk add --update nodejs npm

# Copy package files first for better caching
COPY package.json .
RUN deno install

# Copy the rest of the files
COPY . .
RUN deno cache --lock=deno.lock

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["deno", "run", "--allow-net", "--allow-read", "--watch", "dev"]
