# GREEN_API Автотесты

Проект автотестов для API [Green API](https://green-api.com/docs/api/sending/SendMessage/) с использованием TypeScript, Jest и Axios.

## 📦 Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/your-username/green_api.git
cd green_api
```

2. Установите зависимости:

```bash
npm install
```

## ⚙️ Настройка окружения

Создайте файл `.env` в корне проекта и добавьте свои данные от Green API:

```env
INSTANCE_ID=your_instance_id
API_TOKEN=your_api_token
```

## 🚀 Запуск тестов

```bash
npm test
```

Для запуска одного конкретного теста:

```bash
npx jest tests/sendMessage.test.ts
```

## 📁 Структура проекта

```
src/
  utils/
    httpClient.ts        # Axios-клиент
    config.ts            # Конфигурация из .env
tests/
  sendMessage.test.ts    # Тест отправки сообщений
  getChatHistory.test.ts # Тест получения истории
  getStateInstance.test.ts # Тест состояния инстанса
jest.config.js           # Конфигурация Jest
tsconfig.json            # Конфигурация TypeScript
.env                     # Переменные окружения
.gitignore
```
