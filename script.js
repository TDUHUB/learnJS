// Основы Java Script
'use strict';
function hw() {
  alert('Привет, МИР!');
}

function prom() {
  let age = prompt('Сколько тебе лет?', 37);
  age = age.replace(/\s+/g, '');
  if (age !== '') age = Math.floor(age);
  if (age < 0 || age >= 200) {
    alert('Введено некорректное число');
  } else if (age === '') {
    alert('Не введено число');
  } else if (0 <= age && age < 12) {
    alert(`Тебе ${age}! Да ты еще ребенок!`);
  } else if (age < 18) {
    alert(`Тебе ${age}! Ты подросток`);
  } else if (age < 30) {
    alert(`Тебе ${age}! Ты еще молод`);
  } else if (age < 50) {
    alert(`Тебе ${age}! Ты вполне зрелый`);
  } else if (age < 60) {
    alert(`Тебе ${age}! Как то ты староват`);
  } else if (age < 100) {
    alert(`Тебе ${age}! Здорово старикан`);
  } else if (age >= 100 && age < 200) {
    alert(`Тебе ${age}! Столько не живут. Не врешь?`);
  } else {
    alert('Введено не число');
  }
}
function isBoss() {
  alert(confirm('Ты здесь главный?') ? 'Ты крут!' : 'Ты лошок!');
}

function question() {
  let year = prompt(
    'В каком году была опубликована спецификация ECMAScript-2015?',
    ''
  );
  if (year == 2015) {
    alert('Вы правы!');
  } else {
    alert('Вы неправы!');
  }
}

function cycle() {
  let i = 3;
  while (i) alert(i--);
}
//функции-стрелки

function ask() {
  if (confirm('Вы согласны стать президентом РФ?'))
    alert('Вы согласились стать президентом.');
  else alert('Вы отказались стать президентом.');
}
