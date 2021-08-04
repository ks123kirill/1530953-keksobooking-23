# Учебный проект «Кексобукинг» от [HTML Academy](https://htmlacademy.ru/)

* Программирование: [Кирилл Скорописцев](https://htmlacademy.ru/profile/id1530953).
* Наставник: [Денис Байдаров](https://htmlacademy.ru/profile/4er).

* [Демо проекта](https://ks123kirill.github.io/1530953-keksobooking-23/)
* [Техническое задание](Specification.md)

---

## Описание проекта

Кексобукинг — сервис размещения объявлений о сдаче в аренду недвижимости в центре Токио. Пользователям предоставляется возможность размещать объявления о своей недвижимости или просматривать уже размещённые объявления.

Технические особенности:
1. Исходно готовая верстка.
2. Разработка веб-интерфейса сервиса Кексобукинг.
- 2.1. Валидация формы.
- 2.2. Отправка, получение и обработка данных с сервера (promise). 
- 2.3. Подключение интерактивной карты, создание балунов.
- 2.4. Фильтрация данных.
3. Используемые JS-библиотеки: Leaflet - библиотека для отображения карт на веб-сайтах.
---

## Как использовать

`npm install` - установка зависимостей.

`npm start` - сборка проекта в режиме разработки и запуск локального сервера.

`npm test` - запуск теста на соответствие правилам ESLint.

---

## Структура проекта

```bash
.
├── css/                  # каталог файлов стилей
├── fonts/                # каталог шрифтов
├── img/                  # каталог растровых и векторных изображений
│   └── avatars/          # каталог растровых изображений для аватарки
├── js/                   # каталог JS файлов (модули)
├── leaflet/              # API картографической JS-библиотеки Leaflet
├── .editorconfig         # файл конфигурации настроек редактора
├── .eslintignore         # файл исключений ESLint
├── .eslintrc             # файл конфигурации настроек ESLint
├── .gitattributes        # файл атрибутов Git
├── .gitignore            # файл исключений Git
├── Readme.md             # документация проекта
├── Specification.md      # техническое задание
├── favicon.ico           # файл фавиконка
├── index.html            # файл разметки главной страницы
├── package-lock.json     # lock-файл npm
└── package.json          # файл npm зависимостей и настроек проекта
```
