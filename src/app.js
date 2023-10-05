const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let i = 0; i < players.length ; i++){
        let detailedPlayers = [];
        
        if (i%2 ==0){
            type = "villain";
        }else {
            type = 'hero';
        }

        let details = {
            name : players[i],
            strength : getRandomStrength(),
            Image : "images/super-"+(i+1)+".png",
            type,
        }
        detailedPlayers.push(details);
        
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    let x = Math.round(Math.floor(Math.random()*100));
    return x;
}
getRandomStrength()

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
     for( let i = 1; i < 100; i++){
         if(players[i].type === type){
             fragment += `<div class="players">
             <img src="${players.image}" alt="">
             <div class="name">${players .name}</div>
             <div class="strength">${players.strength}</div>
            </div>`;
         }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}