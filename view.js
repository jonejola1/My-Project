
view()
function view() {

        let html = header()

    switch(model.app.current_page) {
        case 'main':
            html += mainView()
            break
        case 'login':
            html += loginView()
            break
        case 'register':
            html += registerView()
            break
        case 'user':
            html += userView()
            break
        case 'store':
            html += storeView()
            break
        default: 
        html += mainView()
    }

            html += footer()

    document.getElementById('app').innerHTML = html
}
