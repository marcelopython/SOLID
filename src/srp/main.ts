import { Order } from "./entities/Order";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { Message } from "./services/message";
import { Persistency } from "./services/Persistency";

const shoopCart = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(shoopCart, message, persistency);
shoopCart.addItem(new Product('Camiseta', 4.90));
shoopCart.addItem(new Product('Caderno', 9.75));
shoopCart.addItem(new Product('Lápis', 1.87));

console.log(shoopCart.items);
console.log(shoopCart.total());
order.checkout();
console.log(order.orderStatus)

// teste
