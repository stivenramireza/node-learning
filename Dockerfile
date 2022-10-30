# Stage dependencies
FROM node:14.20.1-alpine AS dependencies
WORKDIR /app

COPY package*.json /app
RUN npm ci

# Stage builder
FROM node:14.20.1-alpine AS builder
WORKDIR /app

COPY --from=dependencies /app/node_modules /app/node_modules
COPY . /app

# Stage runner
FROM node:14.20.1-alpine AS runner
WORKDIR /app

COPY --from=builder /app /app
CMD ["npm", "start"]
