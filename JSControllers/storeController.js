function createGamesList(status) {
    //for making the Game list 
    for(let i = 0; i < model.data.games.length; i++) {
        model.data.addedGames += `
        <ul>
        Rank: ${model.data.games[i].ranking} <br>
            ${model.data.games[i].title} <br>
            ${model.data.games[i].cost}
            <button ${model.app.current_user ? `onclick="addToCart('game', '${i}')"` : 'disabled'}>Add to cart</button>
            </ul> <br>`
    }

    // for closing the gameslist
    if(status == 'close') return closeList('addedGames') 
    
    view()
}

function createAppsList(status) {
    //for making the App List
    for(let i = 0; i < model.data.apps.length; i++) {
        model.data.addedApps += `
        <ul> 
        Rank: ${model.data.apps[i].ranking} <br> 
            ${model.data.apps[i].title} <br> 
            ${model.data.apps[i].cost}
            <button ${model.app.current_user ? `onclick="addToCart('app', '${i}')"` : 'disabled'}>Add to cart</button>
        </ul> <br>`
    }

    // for closing the applist
    if(status == 'close') return closeList('addedApps')

    view()
}

function addToCart(type, index) {
    const userIndex = model.data.users.findIndex( user => { return user.username === model.app.current_user } )
    return model.data.users[userIndex].cart.push(type === 'app' ? model.data.apps[index] : model.data.games[index]) 
}
