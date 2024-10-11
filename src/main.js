console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
var i = 5;
console.log(i)
//Префіксний інкремент
console.log(++i)
console.log(i)
// Постфіксний інкремент
console.log(i++)
console.log(i)
// Префіксний декремент
console.log(--i)
console.log(i)
// Постфіксний декремент
console.log(i--)
console.log(i)
/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
//var myNum = 10
var myTest=20;
console.log(myTest)
myTest +=10;
console.log(myTest)
myTest -= 15;
console.log(myTest)
myTest *= 15;
console.log(myTest)
myTest /= 10;
console.log(myTest)
myTest %=25;
console.log(myTest)


/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow
const myPi=Math.PI
console.log("myPi")

const myRound = Math.round(89.279)
console.log(myRound)

const myRandom = Math.random()*10
console.log(myRandom )

const myPow=Math.pow(3,5)
console.log(myPow)
/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
const strObj={
    str:"Мама мыла раму, рама мыла маму",
    length:"Мама мыла раму, рама мыла маму".length
}
console.log(strObj)
/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

const isRamaPos = strObj.str.indexOf('рама');
const isRama = isRamaPos !== -1;
console.log(isRamaPos) 
console.log(isRama)


/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

const strReplace=strObj.str
.replace(/мыла/g, 'моет')
    .replace(/рама/g, 'Рама')
    .replace(/моет маму/g, 'держит маму'); 
console.log(strReplace)
/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
var upperStr='some STRING'.toUpperCase()
 
console.log(upperStr.toUpperCase())

var lowerStr='some STRING'.toLowerCase()
console.log(lowerStr)