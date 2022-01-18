let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

let row = document.createElement('div');
row.setAttribute('class', 'row mt-4')
container.appendChild(row);


function pokemonGame(game) {
    
    for(game of pokemons){
        let col = document.createElement('div');
        col.setAttribute('class', 'col-md-4');
        row.appendChild(col);

        let card = document.createElement('div');
        card.setAttribute('class', 'forBorder card-img-top position-relative p-3 mt-5 bg-warning  gy-5')
        col.appendChild(card);


        var img = document.createElement('img');
        img.setAttribute('class', 'ms-3  rounded-circle bg-danger text-center')
        img.src = game.img
        card.appendChild(img);

        

        
        let Title = document.createElement('h2');
        Title.setAttribute('class', 'text-danger  my-3 ')
        Title.textContent =game.name;
        card.appendChild(Title);
        

        let cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'w-100 cardBody   p-3')
        card.appendChild(cardBody)

        


        let gameNum = document.createElement('h2');
        gameNum.setAttribute('class', 'position-absolute top-0 end-0 bg-danger text-white px-4 py-2')
        gameNum.textContent = game.num;
        cardBody.appendChild(gameNum)

        let height = document.createElement('h5');
        height.textContent = `height: ${game.height}`;
        cardBody.appendChild(height)
        
        let weight = document.createElement('h5');
        weight.textContent = 'weight: '+game.weight;
        cardBody.appendChild(weight);

        let egg = document.createElement('h5');
        egg.textContent = 'egg: '+game.egg;
        cardBody.appendChild(egg);

        let type = document.createElement('h5');
        type.textContent = 'type: '+game.type.join(' ');
        cardBody.appendChild(type);

        let candy = document.createElement('h5');
        candy.textContent = 'candy : '+game.candy ;
        cardBody.appendChild(candy);

      
        let candyCount = document.createElement('h5');
        candyCount.textContent = 'candy count : '+game.candy_count ;
        cardBody.appendChild(candyCount);

        let spawn = document.createElement('h5');
        spawn.textContent = 'spawn chance: '+game.spawn_chance ;
        cardBody.appendChild(spawn);

        let avg_spawns = document.createElement('h5');
        avg_spawns.textContent = 'avg spawns: '+game.avg_spawns ;
        cardBody.appendChild(avg_spawns);

        let spawnTime = document.createElement('h5');
        spawnTime.textContent = 'spawn Time: '+game.spawn_time ;
        cardBody.appendChild(spawnTime);

        let multip = document.createElement('h5');
        multip.textContent = 'multipliers: '+game.multipliers;
        cardBody.appendChild(multip);

        let weaknesses = document.createElement('h5');
        weaknesses.textContent = 'weaknesses: '+game.weaknesses.join(" ");
        cardBody.appendChild(weaknesses);

    }
    
}pokemonGame()





