- eslint, prettier, husky, absolute imports (react eslint prettier husky)
  https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672
      Для шторма
  "eslint-config-airbnb": "18.2.1",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-config-react-app": "^6.0.0",
  "eslint-plugin-prettier": "^4.0.0",
  "husky": "7.0.0",
  "lint-staged": "11.2.4",
  "prettier": "2.4.1"
  
  example
  const x = () => {
  return 1 + 1
  }

https://github.com/typicode/husky

для тестов
"test": "react-scripts test --watchAll=false",

Для абсолютных
jsconfig.json //add to root folder
{
"compilerOptions": {
"baseUrl": "src"
},
"include": ["src"]
}

add to eslint
"settings": {
    "import/resolver": {
    "node": {
    "paths": ["src"]
    }
  }
}

https://create-react-app.dev/docs/adding-custom-environment-variables/
env - для окружений а не для секьюрности (на фронте)

- Внутреннее состояние компонента
- Изменение состояния
- SyntheticBaseEvent
- событие клика
- event target, currentTarget
- Подъем состояния
- props drilling

rsf -live template
1. метод получения юзеров и обновления стейта юзеров (будем юзать аксиос) https://axios-http.com/docs/example
    1.1 пример получения и вывода юзеров через аксиос
2. 2 селекта для выбора национальностей и гендера
3. Параметры сохраняем в стейт
4. кнопка для отправки запроса на получение юзеров по параметрам из стейта