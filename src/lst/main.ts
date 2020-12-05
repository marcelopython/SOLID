import { Order } from "./classes/Order";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { Message } from "./services/message";
import { Persistency } from "./services/Persistency";
import { FiftyPercentDiscount , TenPercentDiscount, NoDiscount} from "./classes/Discount";


const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoopCart = new ShoppingCart(noDiscount);
const message = new Message();
const persistency = new Persistency();
const order = new Order(shoopCart, message, persistency);
shoopCart.addItem(new Product('Camiseta', 4.90));
shoopCart.addItem(new Product('Caderno', 9.75));
shoopCart.addItem(new Product('Lápis', 1.87));

console.log(shoopCart.items);
console.log(shoopCart.total());
console.log(shoopCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus)