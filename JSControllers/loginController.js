
//function for checking if the login credentials are correct and corresponding to the users inside the model
async function checkLogin() {

    if (!model.inputs.login.username)
        alert('No username detected');
        
    if (!model.inputs.login.password)
        alert('No password detected');

    for (let i = 0; i < model.data.users.length; i++) {
        if (model.inputs.login.username === model.data.users[i].username) {
            model.app.current_user = model.inputs.login.username;
            if (model.inputs.login.password === model.data.users[i].password) {
                changePage('user');
                clearCache();
            }
        }
    }
    view();
}
