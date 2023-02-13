
function registerUser() {
    if(!model.inputs.registerUser.username && !model.inputs.registerUser.email || '') return console.log('Username or Email not filled in')

    if(!model.inputs.registerUser.password || !model.inputs.registerUser.confirm_password) return console.log('Password missing!')
    
    if(model.inputs.registerUser.password !== model.inputs.registerUser.confirm_password) return console.log('passwords does not match')    
    
    model.data.users.push({ username: `${model.inputs.registerUser.username}`, password: `${model.inputs.registerUser.password}`, email: `${model.inputs.registerUser.email}`})    
    changePage('login')
    view()
    clearCache()
}
