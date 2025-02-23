// const harflar = ["z" , "d" , "k" , "r" , "o"];
// ["l" , "z" , "m" , "o" , "r"];
// ["l" , "m" , "z" , "o" , "r"];
// ["l" , "m" , "o" , "z" , "z" , "r"];

// const tartiblanganlar = harflar.sort((a,b) => {
//     if(a > b) {
//         return 1;
//     }else if (a < b) {
//         return -1
//     }else {
//         return 0;
//     }
// })

// const numbers = [100, 546, 1, 98, 21]
// const tartib = numbers.sort(function (a,b) {
//     return a - b;
// })

// console.log(tartib);
const pokemonForm = document.querySelector("#form");
const pokeInput = document.querySelector("#input");
const pokeSort = document.querySelector("#select");
const pokeBox = document.querySelector("#pokewrapper");
console.log(pokemonForm,pokeInput,pokeSort,pokeBox);

function renderPokemon(poke) {
    pokeBox.innerHTML = ""; // Clear existing content
    poke.forEach(obyektlar => {
        pokeBox.innerHTML += // Use += to append
        `
        <li class="pokemon_item">
            <span>${obyektlar.num}</span>
            <h2>${obyektlar.name}</h2>
            <img src="${obyektlar.img}" alt="${obyektlar.name}">
            <span>${obyektlar.type.join(" || ")}</span>
        </li>
        `;
    });
}
renderPokemon(pokemons)