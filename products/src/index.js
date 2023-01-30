import faker from 'faker';

let products = '';

console.log('ksdjsjksksjsjkjk');

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`;
}

console.log(products);