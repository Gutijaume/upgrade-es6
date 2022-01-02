//7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let examNotes = exams.reduce((total, note)=>{
    return total += note.score
}, 0)

console.log(examNotes)

//7.2 
let onlyAproved = exams.reduce ((total, note)=>{
    if (note.score >= 5){
        total = total += note.score
    } return total
}, 0)
console.log(onlyAproved)

//7.3 

let meanCalculator = examNotes / exams.length
console.log(meanCalculator)