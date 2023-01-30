
async function registerUser() {
    if(model.inputs.registerUser.username || model.inputs.registerUser.email && model.inputs.registerUser.password) {
        model.data.users.push({ username: `${model.inputs.registerUser.username}`, password: `${model.inputs.registerUser.confirm_password}`, email: `${model.inputs.registerUser.email}`})    
        changePage('login')
        clearCache()
    } 
    view()
}
