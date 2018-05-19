// var name = 'john';
// var age = 26;
//
// console.log(name + age);
// console.log(age + age);
//
// var job, isMarried;
//
// console.log(job);
//
// job = 'teacher';
// isMarried = false;
//
// console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);
//
// age = 'twenty six';
// job = 'driver';
//
// console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);
//
// // var lastName = prompt('whats the last name?');
// //
// // console.log(lastName);
//
// alert(name + ' ' + age + ' ' + job + ' ' + isMarried);

//--------------------section 2, lecture 11
// var now = 2018;
//
// var birthYear = now - 26;
//
// birthYear = now - 26 * 2;
//
// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;
//
// ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26;    because equal operators goes from right to left so it calculates the math first then makes it equal to johns age. otherwise it would be 30

//--------------------section 2, lecture 12

// var name = 'john';
// var age = 26;
// var isMarried = 'no';
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married');
//
// } else {
//   console.log (name + ' is not married');
// }
//
// isMarried = false;
//
// if(isMarried) {
//   console.log('YES!');
// } else {
//   console.log('NO!');
// }


//------------------------section 2, lecture 13

// var job = 'teacher';
//
// job = prompt ('what does john do?');
//
// switch (job) {
//   case 'teacher':
//   console.log('john teaches kids.');
//   break;
//   case 'driver':
//   console.log('john drives a cab');
//   break;
//   case 'cop':
//   console.log('john helps fight crime.');
//   break;
//   default:
//   console.log('jogn does something else');
// }

//------------------------section 2, lecture 14

// var johnH = 150;
// var tugceH = 130;
// var emmaH = 160;
//
// var johnA = 20;
// var tugceA =15;
// var emmaA = 30;
//
// var jS = johnH + 5 * johnA;
// var tS = tugceH + 5 * tugceA;
// var eS = emmaH + 5 * emmaA;

// if (jS > tS) {
//   console.log('winner is John');
// }else if (jS == tS){
//   console.log('they both win');
// } else {
//   console.log('winner is Tugce');
// }

// if (jS > tS && jS > eS) {
//   console.log('winner is John');
// } else if (tS > jS && tS > eS) {
//   console.log('winner is tugce');
// } else if (eS > jS && eS > tS) {
//   console.log('winner is emma');
// } else {
//   console.log('noone wins the game');
// }


//------------------------section 2, lecture 16

// function calAge(yearOfBirth) {
//   var age = 2018 - yearOfBirth;
//   return age;
// }
//
// var ageJohn = calAge(1990);
//
// console.log(ageJohn);
//
// function yearsRet(name, year) {
//   var age = calAge(year);
//   var ret = 65 - age;
//
//   if(ret >= 0 ){
//     console.log(name + ' retires in ' + ret + ' years.');
//   } else {
//     console.log(name + ' is already retired.')
//   }
//
// }
//
// yearsRet('john', 1990);
// yearsRet('mike', 1969);
// yearsRet('marry', 1948);

//------------------------section 2, lecture 17

// statements and expressions

// function someFun(par) {
//   //code
// }
// //statements dont produce any value immediatly.
//
// var someFun = function(par) {
//   //code
// }
//
// //expressions just do something or perform something.

//------------------------section 2, lecture 18

// var names = ['john','jane', 'mark'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[0]);
// names[1] = 'ben';
// console.log(names);
//
// var arr = ['john', 'smith', 1990, 'designer', false];
//
// arr.push('blue');
// arr.unshift('Mr.');
// arr.pop();
// arr.shift();
//
// console.log(arr);
// //
// // alert(arr.indexOf('smith'));
//
// if (arr.indexOf('teacher') === -1) {
//   console.log('john is NOT a teacher.');
// }

//------------------------section 2, lecture 19
//-------------- objects
//
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false
// };
//
// console.log(john.lastName);
// console.log(john['lastName']);
//
// var xyz = 'job';
// console.log(john[xyz]);
//
// john.lastName = 'Miller';
// john['job'] = 'programmer';
//
// console.log(john);
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;
//
// console.log(jane);


//------------------------section 2, lecture 20

//v1.0
// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//        return 2016 - this.yearOfBirth;
//   }
// };

// console.log(john.family[2]);
// // console.log(john.calculateAge(1970));
// console.log(john.calculateAge());
//
// var age = john.calculateAge();
// john.age = age;
// //defined the age variable then inserted it into the john object and thats it.
// console.log(john);

//v2.0

// var john = {
//   name: 'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//        // return 2016 - this.yearOfBirth;
//        this.age = 2016 - this.yearOfBirth;
//   }
// };
//
// john.calculateAge();
// console.log(john);

//------------------------section 2, lecture 21
//for loops

// var names = ['a', 'b', 'c', 'd', 'e'];
// //
// // for (var i=0; i<names.length; i++) {
// //   console.log(names[i]);
// // }
// //
// // for(var i = names.length - 1; i>=0; i--) {
// //   console.log(names[i]);
// // }
//
// //while loops
// var i = 0;
// while(i < names.length) {
//   console.log(names[i]);
//   i++;
// }
//
// for (var i = 1; i<=5; i++) {
//   console.log(i);
//   if(i === 3) {
//     break;
//   }
// }
//
// for(var i = 1; i<=5; i++){
//   if(i === 3) {
//     continue;
//   }
//   console.log(i);
// }

//------------------------section 2, lecture 22

var arr = [1990, 2010, 1970];

function printFullAge (arr) {
  var ages = [];
  var result =[];
  for(var i=0; i<arr.length; i++) {
    ages[i] = 2018 - arr[i];
  }
  for(var i=0; i<ages.length; i++) {
    if(ages[i] >= 18) {
      console.log(ages[i] + ' is full of age!');
      result.push(true);
    } else {
      console.log(ages[i] + ' is NOT full of age');
      result.push(false);
    }
  }
  return result;

}

var full_1 = printFullAge([1990, 2003, 1870]);
var full_2 = printFullAge(arr);
