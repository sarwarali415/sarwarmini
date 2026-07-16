FROM node:20-bullseye-slim

RUN apt-get update && \
    apt-get install -y git ffmpeg imagemagick webp curl python3 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN mkdir -p session

EXPOSE 8000

CMD ["node", "index.js"]
