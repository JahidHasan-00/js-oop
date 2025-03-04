const Person = require('./Person')
const Student = require('./Student')
const Teacher = require('./Teacher')

const p = new Person('Jahid', 'jahid@gmail.com')
const s = new Student('Rafiq', 'rafiq@gmail.com', ['Computer 101', 'Math', 'English'], 30000)
const t = new Teacher('Solaiman Kabir', 'solaiman@gmail.com', 'Computer Fundamentals', 400000)

s.name = 'Rafiq Islam'
// console.log(p)
// console.log(s)
// console.log(t)
s.print()
console.log('\n')
s.print()

console.log(s instanceof Teacher) //(false) because s not an instance of Teacher but instance of Person
console.log(t instanceof Person) 





