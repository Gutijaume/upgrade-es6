const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
]

//4.1

let nameUsers = users.map (item => item.name)
console.log(nameUsers)

//4.2

let newNames = users.map((user)=>{
   if (user.name[0]==="A"){
        user.name = "Anacleto"
    }
    return user.name

})
let listOfFinalUsers = newNames.join(", ")
console.log(listOfFinalUsers)





const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

// //4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.



let visitedCities = cities.map((city)=>{
    if (city.isVisited === true){
       city.name = `${city.name}: Visitado`
    } return city.name
}) 

console.log (visitedCities)
