
function storeView() {
    return /*HTML*/ `
        <div>
            <h1>
                Store
            </h1>
                <h2>Recommended Apps</h2>
            <div>
                <button onclick="createGamesList(model.data.addedGames ? 'close' : '')">${model.data.addedGames ? 'Close Top Games' : 'Top Games'}</button> <br>
                ${model.data.addedGames}
            </div>
            
            <div>
                <button onclick="createAppList(model.data.addedApps ? 'close' : '')">${model.data.addedApps ? 'Close Top Apps' : 'Top Apps'}</button> <br>
                ${model.data.addedApps}
            </div>
        </div>
    `;
}



