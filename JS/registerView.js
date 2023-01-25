
function registerView() {
    return /*HTML*/ `
        <div>
            <h1>
                Register
            </h1>
            <input type="text" oninput="model.inputs.registerUser.username = this.value" placeholder="Username">
            <input type="text" oninput="model.inputs.registerUser.email = this.value" placeholder="E-mail"> 
            <br>
            <input type="text" oninput=" model.inputs.registerUser.password = this.value " placeholder="Password">
            <input type="text" oninput=" model.inputs.registerUser.confirm_password = this.value" placeholder="Confirm password"> 
            <br>
            <button onclick="registerUser()">Register user</button>
            <button onclick="changePage('login')">Back to login</button>
            
        </div>
    `;
}
