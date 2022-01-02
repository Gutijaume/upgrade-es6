const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

//5.1 

let biggerThan18 = ages.filter (item =>item > 18 )
console.log(biggerThan18)

//5.2
let evensNumbers = ages.filter (item =>item % 2 === 0 )
    console.log(evensNumbers)

//5.3

 const streamers = [
        {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
        {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
        {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
        {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
    ];

let streamersLol = streamers.filter (streamer => streamer.gameMorePlayed === "League of Legends")
console.log(streamersLol)

//5.4

let streamersWithU = streamers.filter (streamer => streamer.name.includes("u"))
console.log(streamersWithU)

//5.5

let streamersLegends = streamers.filter (streamer => streamer.gameMorePlayed.includes("Legends"))
console.log(streamersLegends)

let upperCase = streamers.map((streamer)=>{
    if (streamer.age > 35){
         streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
     }
     return streamer.gameMorePlayed
 
 })
console.log(upperCase)

//5.6




let autoComplete = (streamer) => {
    const streamers = [
        {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
        {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
        {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
        {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
    ];

    return streamer

}

window.onload = () => {
    let input$$ = document.querySelector("input")
    input$$.addEventListener("input", ()=>{
        streamers = streamers.filter(streamer =>{
            if (streamer.name.toUpperCase().includes(input.value.toUpperCase())){
                return streamer
            }
        })
        console.log(streamersArray$$)
    })
      
    }

