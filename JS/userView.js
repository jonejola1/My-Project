
function userView() {
    
    let findCorrectUser = model.data.users.findIndex(i => i.username == model.app.current_user)

    return /*HTML*/ `
        <div>
            <h1>
            Profile ${model.app.current_user}
            </h1>
            <h2>Your information</h2>
            <p>
                Username: ${model.app.current_user}<br>
                Password: ${model.data.users[findCorrectUser].password}<br>
                Email: ${model.data.users[findCorrectUser].email}<br>
                <h3>Cart</h3> <br>
                <button onclick="listCart('${model.data.cartList ? 'close' : ''}')">${model.data.cartList ? 'Hide cart' : 'View cart'}</button>
                ${model.data.cartList}
            </p>
            <div>
                <button onclick="createUserList('${model.data.userList ? 'close' : ''}')">${model.data.userList ? 'Hide users' : 'Show users'}</button>
                ${model.data.userList}
            </div>
        </div>
    `;
}

function listCart(status) {

    const userIndex = model.data.users.findIndex( user => { return user.username === model.app.current_user } )
    model.data.cartList = ''

    for (let i = 0; i < model.data.users[userIndex].cart.length; i++) {
        model.data.cartList += `
        <p>
            Title: ${model.data.users[userIndex].cart[i].title} </br>
            Cost: ${model.data.users[userIndex].cart[i].cost}
        </p>
        `
    }

    if(status == 'close') return closeList('cartList')

    view()
}

function createUserList(status) {
    model.data.userList = ''
    for(let i = 0; i < model.data.users.length; i++) {
        model.data.userList += `
        <p> 
            <ul>
                <li>
                    Username: ${model.data.users[i].username}<br>
                    Email: ${model.data.users[i].email == '' ? 'null' : `${model.data.users[i].email}`}<br>
                    Password: ${model.data.users[i].password}<br>
                </li>
            </ul>
        </p> 

        ` 
    }
    
    if(status == 'close') return closeList('userList')
    
    view()
}


