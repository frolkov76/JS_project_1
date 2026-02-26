const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?","");
const personalMoviieDB = {
count: numberOfFilms,
movies: {},
actors: {},
generas: [],
privat: false

};
const a = prompt("Один из полседних простмотренных фильмов?", ""),
      b = prompt("На сколько оценте его?", ""),
      c = prompt("Один из полседних простмотренных фильмов?", ""),
      d = prompt("На сколько оценте его?", "");

      personalMoviieDB.movies[a] = b;
      personalMoviieDB.movies[c] = d;
      console.log(personalMoviieDB);