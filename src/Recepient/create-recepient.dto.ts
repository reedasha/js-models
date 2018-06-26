import { Message } from "Message/message.entity";

export class CreateRecepientDto {
    readonly id: number;
    readonly address: string;
    readonly type: string[];
    readonly messages: Message;
  }
