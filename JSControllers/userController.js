
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

