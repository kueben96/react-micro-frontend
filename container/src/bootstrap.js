import { mount } from 'products/ProductsIndex';
import 'cart/CartShow';
// if the container can't find a module named 'products' in the node_modules, then it will look if the module federation has key called 'products'
console.log('container')

mount(document.querySelector('#products-container')); 