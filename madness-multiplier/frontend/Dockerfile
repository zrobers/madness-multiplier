FROM node:18 AS build

ENV NODE_ENV=production
#sends that var throughout whole container

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm install

RUN npm run build

# Step 2: Serve the React app
FROM nginx:alpine

# Copy the build output to the default nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]