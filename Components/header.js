
function header() {
    return /*HTML*/ `
        <div class="header">
          <a href="#" onclick="changePage('main')" class="logo">CodeAlong Testing Facility</a>
          <div class="header-right">
            <button onclick="changePage('home')">Home</button>
            <button onclick="changePage('store')">Store</button>
            <button onclick="changePage('${model.app.current_user ? 'user' : 'login'}')">${model.app.current_user ? 'profile' : 'login'}</button>
            ${model.app.current_user ? `<button onclick="changePage('cart')">Cart</button>` : ''}
          </div>
        </div>
    `
}
