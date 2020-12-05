import { Message } from "../services/message";
import { Persistency } from "../services/Persistency";
import { OrderStatus } from "./Interfaces/OrderStatus";
import { ShoppingCart } from "./shopping-cart";
import { CustomerOrder } from './Interfaces/customerProtocol';
export class Order{
    private _orderStatus: OrderStatus  = 'open';

    constructor(private readonly cart: ShoppingCart, 
                private readonly messaging: Message,
                private readonly persistency: Persistency,
                private readonly customer: CustomerOrder   ){

    }

    get orderStatus():OrderStatus{
        return this._orderStatus;
    }

    checkout(): void{
        if(this.cart.isEmpty()){
            console.log('Seu carrinho esta vazio');
            return;
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(`Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`);
        this.persistency.saveOrder();
        this.cart.clear();

        console.log('O cliente é: ',this.customer.getName(), this.customer.getIDN())
    }
  
}