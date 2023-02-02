import { mountProducts } from 'products/ProductsIndex';
import { mountCart } from 'cart/CartShow'
import 'cart/CartShow';
// if the container can't find a module named 'products' in the node_modules, then it will look if the module federation has key called 'products'
console.log('container')

mountProducts(document.querySelector('#products-container'));
mountCart(document.querySelector('#cart-container'));