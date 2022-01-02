const pointsList = [32, 54, 21, 64, 75, 43]


//3.1
let pointsArray =[...pointsList]

//3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}

let toyObject = {...toy}

//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

let allPointsArray = [...pointsList1, ...pointsList2]


//3.4

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let newToyObject = {...toy1, ...toyUpdate}

//3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let newColorsArray = [...colors]
newColorsArray.splice(1,1)


