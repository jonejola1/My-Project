
function header() {
    return /*HTML*/ `
        <div class="header">
          <a onclick="changePage('main')" class="logo">CodeAlong Testing Facility</a>
          <div class="header-right">
            <a onclick="changePage('home')">Home</a>
            <a onclick="changePage('store')">Store</a>
            <a onclick="changePage('${model.app.current_user ? 'user' : 'login'}')">${model.app.current_user ? 'profile' : 'login'}</a>
            ${model.app.current_user ? `<a onclick="changePage('cart')">Cart</a>` : ''}
          </div>
        </div>
    `
}
  