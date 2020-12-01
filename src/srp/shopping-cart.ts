type CardItem =  {name: string, price: number};
type OrderStatus  = 'open' | 'closed';

export class ShoppingCart{
    private readonly _items: CardItem[] = [];
    private _orderStatus: OrderStatus  = 'open';
    addItem(item: CardItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void{
        this._items.splice(index, 1);
    }

    get items(): Readonly<CardItem[]>{
        return this._items;
    }

    get orderStatus():OrderStatus{
        return this._orderStatus;
    }

    total(): number{
        return +this._items.reduce((total, next)=>total + next.price, 0).toFixed(2)
    }

    checkcout(): void{
        if(this.isEmpty()){
            console.log('Seu carrinho esta vazio');
            return;
        }
        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean{
        return this._items.length === 0;   
    }

    sendMessage(msg: string){
        console.log(msg)
    }

    saveOrder(): void{
        console.log('Pedido salvo com sucesso...');
    }

    clear(): void{
        console.log('Carrinho de compras foi limpo...')
        this._items.length = 0;
    }
}

const shoopCart = new ShoppingCart();
shoopCart.addItem({name:'Camiseta', price: 4.90});
shoopCart.addItem({name:'Caderno', price: 9.75});
shoopCart.addItem({name:'Lápis', price: 1.87});


console.log(shoopCart.items);
console.log(shoopCart.total());
shoopCart.checkcout();
console.log(shoopCart.orderStatus)