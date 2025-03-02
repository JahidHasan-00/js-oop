const Person = require('./Person')
const Student = require('./Student')
const Teacher = require('./Teacher')

const p = new Person('Jahid', 'jahid@gmail.com')
const s = new Student('Rafiq', 'rafiq@gmail.com',['Computer 101', 'Math', 'English'], 30000)
const t = new Teacher('Computer Fundamentals', 400000)

console.log(p)
console.log(s)
console.log(t)



