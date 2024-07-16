# nodejs-hw-01

У файлі `src/constants/contacts.js` є оголошена константа `PATH_DB.` Ініціалізуйте її значенням, яке буде зберігати шлях до файлу `src/db/db.json`.

У файлі **`package.json`**, вже описані скрипти, які виконують код певних файлів:

- **`npm run get-all`** - виконує код із файлу `src/scripts/getAllContacts.js`
- **`npm run generate`** - виконує код із файлу `src/scripts/generateContacts.js`
- **`npm run add-one`**- виконує код із файлу `src/scripts/addOneContact.js`
- **`npm run count`**- виконує код із файлу `src/scripts/countContacts.js`
- **`npm run remove-last`** - виконує код із файлу `src/scripts/removeLastContact.js`
- **`npm run remove-all`**- виконує код із файлу `src/scripts/removeAllContacts.js`

В файлі `src/utils/createFakeContact.js` оголошена функція `createFakeContact`, яка створює контакт з випадковими даними. Для генерації реалістичних випадкових даних, таких як імена, телефонні номери, емейли тощо використовується бібліотека [@faker-js/faker](https://github.com/faker-js/faker).

Встанови її у свій проєкт командою:

```js
npm i -D @faker-js/faker
```

У файлі `src/scripts/generateContacts.js` опишіть функцію `generateContacts`. Вона має за допомогою функції `createFakeContact`, створювати передану кількість згенерованих контактів, а потім додавати їх до масиву у файлі `src/db/db.json` і записувати їх назад у файл `src/db/db.json`.

Переконайтесь, що ваша функція `generateContacts` коректно додає нові контакти до вже існуючих. Тобто, якщо масив був порожній, після виклику функції в ньому має бути передана кількість контактів, наприклад 5. Якщо контактів було 3 і у виклик передали 5, то після виклику функції їх має стати 8.

У файлі `src/scripts/addOneContact.js` опишіть функцію `addOneContact`. Вона має додавати до масиву у файлі `src/db/db.json` лише один згенерований контакт. Забезпечте правильне додавання одного контакту до масиву, збереження змін у файлі.

У файлі `src/scripts/getAllContacts.js` опишіть функцію `getAllContacts`. Вона має повертати масив контактів із файлу `src/db/db.json`. Функція має коректно читати масив контактів з файлу.

У файлі `src/scripts/countContacts.js` опишіть функцію `countContacts`. Вона має повертати кількість контактів в масиві у файлі `src/db/db.json`.Переконайтесь, що функція точно рахує кількість контактів.

У файлі `src/scripts/removeAllContacts.js` опишіть функцію `removeAllContacts`. Вона має видаляти усі контакти з масиву у файлі `src/db/db.json`.

У файлі `src/scripts/removeLastContact.js` опишіть функцію `removeLastContact`, яка видалятиме останній контакт з масиву, якщо в масиві є хоча б один елемент.
