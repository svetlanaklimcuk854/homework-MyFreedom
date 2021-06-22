// 1. Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16... 
// Использовать цикл for

for (let i = 0; i < 100; i++) {
  console.log(Math.pow(i, 2));
}


// 2. Описать массив из объектов с двумя полями: строковым и числовым.
// Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

const users = [{ age: 3, name: 'Vika' }, { age: 15, name: 'Olya' }, { age: 9, name: 'Natasha' }];
for (let user of users) {
  if (user.age > 10) {
    console.log(user.name);
  }
}


// 3. Написать функцию, которая принимает массив чисел и возвращает максимальное число из массива.

const numbers = [2, 5, 3, 88, 41];

function getMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(getMax(numbers));

// 4.Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова).
// Например, из массива ['red', 'blue'] получится массив [{ word: 'red', length: 3}, { word: 'blue', length: 4}].

// * Реализовать это в виде функции, которая принимает массив слов и возвращает массив объектов.

const words = ['red', 'blue', 'orange', 'green', 'black'];

function getWordsArr(arr) {
  let newWords = [];

  for (let word of words) {
    newWords[newWords.length] = { word: word, length: word.length };
  }
  return newWords;
}

console.log(getWordsArr(words));

//  5. // Описать в html таблицу (тег table) из 5 строк и 2 столбцов. Каждая строка (тег tr) - пользователь. Первая колонка - его имя, вторая колонка - его возраст

// Заменить текст в ячейке возраста. Если пользователю > 18, то на текст "совершеннолетний". Если пользователю < 18, то на текст "несовершеннолетний". Использовать .textContent = .


// Собрать имена пользователей в массив строк ["Олег", "Коля" и т.д].

const names = [];
for (let td of document.body.children[0].children[0].children) {
  names.push(td.cells[0].textContent);

}

console.log(names);


// Собрать пользователей в массив объектов вида [{ name: "Олег", age: 18 }, { name: "Коля", age: 15 } и т.д]. Использовать .textContent.

const usersArr = [];

for (let td of document.body.children[0].children[0].children) {
  usersArr.push({
    name: td.cells[0].textContent,
    age: td.cells[1].textContent,
  })
}

console.log(usersArr);

// Заменить текст в ячейке возраста. Если пользователю > 18, то на текст "совершеннолетний". Если пользователю < 18, то на текст "несовершеннолетний". Использовать .textContent = .

for (let i = 0; i < document.body.children[0].children[0].children.length; i++)

  if (document.body.children[0].children[0].rows[i].cells[1].innerText >= 18) {
    document.body.children[0].children[0].rows[i].cells[1].textContent = 'cовершеннолетний'
  } else {
    document.body.children[0].children[0].rows[i].cells[1].textContent = 'несовершеннолетний'
  }
