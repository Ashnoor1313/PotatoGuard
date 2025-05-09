FROM node:20-slim

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the client application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Environment variables can be set through Cloud Run
ENV NODE_ENV=production
ENV PORT=8080

# Start the application
CMD ["npm", "start"]