
function changePage(page) {
    model.app.current_page = page
    view()
}

function checkLogin() {
    if(!model.inputs.login.username) alert('No username detected')
    if(!model.inputs.login.password) alert('No password detected')
    for(let i = 0; i < model.data.users.length; i++) {
        if(model.inputs.login.username === model.data.users[i].username){
            model.app.current_user = model.inputs.login.username;
            if(model.inputs.login.password === model.data.users[i].password){  
                changePage('user')
                clearCache()
            }
        } 
    }
}

function registerUser() {
    if(model.inputs.registerUser.username || model.inputs.registerUser.email && model.inputs.registerUser.password) {
        model.data.users.push({ username: `${model.inputs.registerUser.username}`, password: `${model.inputs.registerUser.confirm_password}`, email: `${model.inputs.registerUser.email}`})    
        changePage('login')
        clearCache()
    } 
}

function clearCache(){
    if(model.inputs.login.username || model.inputs.login.password) {
        model.inputs.login.username = ""
        model.inputs.login.password = ""
    }
        model.inputs.registerUser.username = ""
        model.inputs.registerUser.email = ""
        model.inputs.registerUser.password = ""
        model.inputs.registerUser.confirm_password = ""
}