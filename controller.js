
function changePage(page) {
    model.app.current_page = page
    view()
}

// misc controllers

//function for clearing every input when logged in
//The purpose of this function is to eliminate duplication
function clearCache(){
    if(model.inputs.login.username || model.inputs.login.password) {
        model.inputs.login.username = ""
        model.inputs.login.password = ""
    }
        model.inputs.registerUser.username = ""
        model.inputs.registerUser.email = ""
        model.inputs.registerUser.password = ""
        model.inputs.registerUser.confirm_password = ""
        
        model.data.addedApps = '';
        model.data.addedGames = '';
}

//function for closing lists that open when clicking (viewCart, Show users, Top Games, Top Apps)
function closeList(list) {
    model.data[list] = ''
    view()
}
