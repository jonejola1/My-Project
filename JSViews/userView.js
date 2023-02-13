
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
            </p>
            <p>
                ${model.app.current_user ? '<button onclick="signOut()">Log out</button>' : ''}
            </p>
            <p>
                <h3>Cart</h3> <br>
            </p>
            <p>
                <button onclick="listCart('${model.data.cartList ? 'close' : ''}')">${model.data.cartList ? 'Hide cart' : 'View cart'}</button>
                ${model.data.cartList}
            </p>
            <p>
                ${model.app.current_user == 'admin' ? `<div> <button onclick="createUserList('${model.data.userList ? 'close' : ''}')">${model.data.userList ? 'Hide users' : 'Show users'}</button>` : ''}
                <br>
                <ul>
                ${model.data.userList}
                </ul>
            </p>
        </div>
    `;
}
