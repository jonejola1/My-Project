
function userView() {

    let findCorrectUser = model.data.users.findIndex(i => i.username == model.app.current_user)
    let userList = '';

    if(model.app.current_user == 'admin') {
            for(let i = 0; i < model.data.users.length; i++) {
                userList += `
                <p>
                    <ol>
                        <ul> 
                            Username: ${model.data.users[i].username}<br>
                            Email: ${model.data.users[i].email == '' ? 'null' : `${model.data.users[i].email}`}<br>
                            Password: ${model.data.users[i].password}<br>
                        </ul>
                    </ol>
                </p> ` 
            }
    }
    
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
                <button onclick="listCart()">view cart</button>
                ${model.data.cartList}
            </p>
            <p>
                ${userList}
            </p>
        </div>
    `;
}

function listCart() {

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

    view()
}
