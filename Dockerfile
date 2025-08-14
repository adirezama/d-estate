# pull official base image
FROM node:22.11.0-alpine3.20

# Set working directory di dalam container
WORKDIR /app

RUN apk add bash curl

# Salin package.json dan npm.lock ke dalam container
COPY package.json  ./

# Install dependensi menggunakan npm
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Expose port yang akan digunakan oleh aplikasi (default Next.js: 3000)
EXPOSE 3100

# Jalankan perintah untuk menjalankan aplikasi
CMD ["npm", "start"]