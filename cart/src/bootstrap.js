import faker from 'faker'

const cartText = `<div>You habe ${faker.random.number()} items in your cart</div>`

document.querySelector('#cart-dev').innerHTML = cartText;