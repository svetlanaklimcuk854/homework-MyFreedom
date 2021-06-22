// 1. Предусмотреть в коде пустой объект. Попросить пользователя ввести своё имя, следом попросить пользователя ввести свой возраст. Создать в заранее предусмотренном пустом объекте свойства под имя и под возраст и занести туда соответствующие данные. 
// Использовать prompt().

let user = {name: 'name', age: 'age'};
user.name = prompt("Введите Ваше имя", " ");
user. age = +  prompt ("Введите ваш возраст", " ")

console.log (user);




// 2.Используя js, нужно поменять цвет фона и размер шрифта в каждой из ячеек таблицы по отдельности.

        let elements = document.querySelectorAll('th');
        for (let i = 0; i < elements.length; i++) {
          if (i % 2 === 1) {
            elements[i].style.backgroundColor = 'red';
            elements[i].style.fontSize = '24px';
          } else {
            elements[i].style.backgroundColor = 'lightgreen';
            elements[i].style.fontSize = '54px'
          }
        }  

        // Доставать случайные цвет и размер из заранее описанных двух массивов: со строками цветов и с числами размеров.
        // Реализовать изменение стиля в виде функции, которая принимает 3 параметра: дом-элемент, цвет, размер. Соответственно, функцию нужно будет вызвать 2 раза.
        let colors = ['orange', 'aqua', 'purple', 'lime'];
        let sizes = ['18px', '46px', '38px', '72px'];

        for (let elements of document.querySelectorAll('th')) {
          elements.style.backgroundColor =  colors[Math.floor(Math.random() * colors.length)];
          elements.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
      }
      
