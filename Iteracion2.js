//2.1 Object Destructuring
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title} = game
let {gender} = game
let {year} = game

//2.2 

const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1, fruit2, fruit3] = fruits
    
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name} = animalFunction()
let {race} = animalFunction()

//2.4

const car = {carname: 'Mazda 6', itv: [2015, 2011, 2020] }
let {carname, itv} = car
let [year1, year2, year3] = itv

console.log(carname, itv)
console.log(year1, year2, year3)



