1. Переиспользуем компонент UserCard  // https://mui.com/getting-started/installation/
2. Подключаем материал и юзаем гриды // https://mui.com/components/grid/
   https://mui.com/api/grid/
3. Работа со стейтами
   - вынести запрос в отдельный метод с параметрами

   
4. Работа с формами
   http://htmlbook.ru/html/select
<form onSubmit={onFilter}>
  <p>Выберите пол</p>
  <select>
    <option value="">All</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

  <p>Выберите национальность</p>
  <select>
    <option value="">All</option>
    <option value="us">US</option>
    <option value="dk">DK</option>
    <option value="fr">FR</option>
    <option value="gb">GB</option>
  </select>
  <button onSubmit={onFilter} type="submit">
    Filter
  </button>
</form>

5. Сабмит форма, дебагер, event.type
   https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

event.preventDefault();

event.target

HTML form elements
https://stackoverflow.com/questions/3547035/getting-html-form-values

<select name="nat">

 const formData = new FormData(event.target)
 const formProps = Object.fromEntries(formData)

event.target.checkValidity()
https://developer.mozilla.org/ru/docs/Learn/Forms/Form_validation

6. Вынести метод в сервисы