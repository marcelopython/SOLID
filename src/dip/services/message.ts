import { MessageProtocol } from "../classes/Interfaces/MessageProtocol";

export class Message implements MessageProtocol{

    sendMessage(msg: string){
        console.log(msg)
    }

}