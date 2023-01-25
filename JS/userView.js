
function userView() {
    let findCorrectUser = model.data.users.findIndex(i => i.username == model.app.current_user)
    return /*HTML*/ `
        <div>
            <h1>
            Profile ${model.app.current_user}
            </h1>
            <h2>Your information</h2>
            <p>
                Username: ${model.app.current_user}
                <br>
                Password: ${model.data.users[findCorrectUser].password}
                <br>
                Email: ${model.data.users[findCorrectUser].email}
            </p>
        </div>
    `;
}