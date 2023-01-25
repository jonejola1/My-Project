function header() {
    return `
        <div class="header">
          <a href="#" onclick="changePage('main')" class="logo">CodeAlong Testing Facility</a>
          <div class="header-right">
            <button onclick="changePage('home')">Home</button>
            <button onclick="changePage('store')">Store</button>
            <button onclick="changePage('login')">Login</button>
            
          </div>
        </div>
    `
}