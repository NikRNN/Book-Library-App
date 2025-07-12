# Структура проекта

**Основные каталоги:**

```
├── book-library-app/
├── api /
│   ├── -data/
│   ├── -index.js
│   ├── -package-lock.json
│   └── -package.json
├── frontend/
│   ├── -public/
│   ├── -src/
│   │   ├── assest/
│   │   ├── components/
│   │   ├── -data/
│   │   ├── -redux/
│   │   ├── -utils/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.condig.js
│   ├── package-lock.json
│   ├── package.json
│   └── .gitignore
├── index.html
├── README.md
├── vite.config.js
└── screenshots


```

=======

# Book library app (Vite + React + Redux)

![Интерфейс приложения](./screenshots/screenshots1.png)
![Интерфейс приложения](./screenshots/screenshots2.png)
![Интерфейс приложения](./screenshots/screenshots3.png)

## О проекте

Book Library App — приложение для отображения и фильтрации списка книг.
Пользователь может фильтровать книги по автору и названию, отмечать любимые книги и удалять книги из списка. В проекте используется имитация сервера с базой книг. Пользователь может подгружать книги с сервера (json-файл).

## Технологии

- Vite 7
- React 19 (функциональные компонента)
- CSS
- axios

## Установка и запуск

```bash
git clone https://github.com/NikRNN/Book-Library-App.git
cd Book-Library-App
npm install
npm run dev (для фронтенда)
node index.js (для сервера)
```
