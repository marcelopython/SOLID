import { CardItem } from "./Interfaces/CardItem";

export class Product implements CardItem{
    constructor(
        public name: string, public price: number
    ){
        
    }
}