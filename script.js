/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt('How many movies have you watched already?');
// let a = prompt('Last watched film: ');
// let b = prompt('Rate the film from 1 to 10: ');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// for (let i = 0; i < 2; i++) {
//   let a = prompt('Last watched film: ');
//   let b = prompt('Rate the film from 1 to 10: ');
//   if (
//     a != null &&
//     b != null &&
//     a != '' &&
//     b != '' &&
//     a.length < 50 &&
//     b.length < 50
//   ) {
//     personalMovieDB.movies[a] = b;
//     console.log(1);
//   } else {
//     console.log('error');
//     i--;
//   }
// }
// if (personalMovieDB.count < 10) {
//   console.log('You are a regular watcher');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('You are a cinema fan');
// } else {
//   console.log('error');
// }
// console.log(personalMovieDB);

let i = 0;
while (i < 2) {
  let a = prompt('Last watched film: ');
  let b = prompt('Rate the film from 1 to 10: ');

  if (
    a != null &&
    b != null &&
    a.length < 50 &&
    b.length < 50 &&
    a != '' &&
    b != ''
  ) {
    personalMovieDB.movies[a] = b;
    console.log('success');
  } else {
    i--;
    console.log('failure');
  }
  i++;
}
