function cartView() {
    return /*HTML*/ `
        <div>
            <h1>
                Cart
            </h1>
            <div>
                <ul>
                ${userCart}
                </ul>
            </div>
        </div>
    `;
}