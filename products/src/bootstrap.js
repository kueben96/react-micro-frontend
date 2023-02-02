import faker from 'faker';

// element = html element
// function can be called in situation #1 and #2
const mountProducts = (element) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`;
    }
    element.innerHTML = products;
    // Similar to: ReactDOM.render(<App/>, el);
}

// Context/Situation #1
// We are running this file in development in isolation
// We are sing our local index.html file
// Which DEFINETELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV == 'development') {
    // is products running in isolation? -> products/src/index.html only 
    // used when products is running in isolation so refer to an element
    // insinde index.html 
    const el = document.querySelector('#dev-products');
    // Assuming out container doesnt have an element with id 'dev-products'
    if (el) {
        mountProducts(el);
    }
}

// Context/Situation #2
// We are running this file in development or production 
// through the Container app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app

export { mountProducts };