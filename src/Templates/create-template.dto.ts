import { Message } from "Message/message.entity";

export class CreateTemplateDto {
    readonly id: number;
    readonly subject: string;
    readonly body: string;
    readonly attachment: string;
    readonly messages: Message[];
  }