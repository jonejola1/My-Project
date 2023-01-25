
function loginView() {
    return /*HTML*/ `
    <div>
        <h1>
            login
        </h1>
        <input type="text" oninput="model.inputs.login.username = this.value" placeholder="username">
        <input type="text" oninput="model.inputs.login.password = this.value" placeholder="password"> 
        <br>
        <button onclick="checkLogin(model.inputs.login.username, model.inputs.login.password)">Login</button>
        <button onclick="changePage('register')">Register</button>
    </div>
    `;
}
