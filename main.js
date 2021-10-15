//task 0
const arena = document.querySelector('.arenas');
const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'sword', 'pistol', 'gun'],
    attack: function (name) {
        console.log(name + ' ' +'Figth...');
    }
}

const player2 = {
    player: 2,
    name: 'Liukang',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife', 'sword', 'pistol', 'gun'],
    attack: function (name) {
        console.log( name + ' ' +'Figth...');
    }
}

function createElement(tag, className) {
    const tags = document.createElement(tag);
    if (className) {
        tags.classList.add(className);
    }
    

    return tags;

}
//task 1
function createPlayer(playerObj) {
    const player = createElement('div', 'player' +  playerObj.player);
    const progressbar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const img = createElement('img');


    
    life.style.width = playerObj.hp +'%';
    name.innerText = playerObj.name;
    img.src =  playerObj.img;
   

    
    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);

    return player;
    
}

arena.appendChild(createPlayer( player1));
arena.appendChild(createPlayer( player2));
