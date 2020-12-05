import { PersistencyProtocol } from "../classes/Interfaces/PersistencyProtocol";

export class Persistency implements PersistencyProtocol{
    saveOrder(): void{
        console.log('Pedido salvo com sucesso...');
    }
}