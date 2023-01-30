
function changePage(page) {
    model.app.current_page = page
    view()
}

// misc controllers
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

function closeList(list) {
    model.data[list] = ''
    view()
}
