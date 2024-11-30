# Используем базовый образ с Node.js для сборки
FROM node:16 AS build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Собираем приложение
RUN npm run build

# Используем базовый образ Nginx для запуска готового приложения
FROM nginx:alpine AS production-stage

# Копируем сборку Vue из предыдущего этапа
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
