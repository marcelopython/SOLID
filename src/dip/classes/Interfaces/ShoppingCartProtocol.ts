import { CardItem } from "../../../ocp/classes/Interfaces/CardItem";

export interface ShoppingCartProtocol{
    items: Readonly<CardItem[]>;
    addItem(item: CardItem): void;
    removeItem(index: number): void;
    total(): number;
    totalWithDiscount(): number;
    isEmpty(): boolean;
    clear(): void;
}

