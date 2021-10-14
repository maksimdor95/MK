//task 0
const kitana = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'sword', 'pistol', 'gun'],
    attack: function () {
        console.log( player1.name + ' ' +'Figth...');
    }
}

const liukang = {
    name: 'Liukang',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife', 'sword', 'pistol', 'gun'],
    attack: function () {
        console.log( player1.name + ' ' +'Figth...');
    }
}
//task 1
function createPlayer(player, namePlayer, hp) {
    const playerFirst = document.createElement('div');
    const progressbar = document.createElement('div');
    const character = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const img = document.createElement('img');
    const arena = document.querySelector('.arenas');

    playerFirst.className = player;
    progressbar.className = 'progressbar';
    character.className = 'character';
    life.className = 'life';
    life.style.width = hp +'%';
    name.textContent = namePlayer.name;
    img.src = namePlayer.img;
    name.className = 'name';
    name.textContent = namePlayer.name;
    img.src = namePlayer.img;


    arena.appendChild(playerFirst);
    playerFirst.appendChild(progressbar);
    playerFirst.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    
}

createPlayer('player1', kitana, 50);
createPlayer('player2', liukang, 80);