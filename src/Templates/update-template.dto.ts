import { Message } from "Message/message.interface";

export class UpdateTemplateDto {
    readonly id: number;
    readonly subject: string;
    readonly body: string;
    readonly attachment: string;
    readonly messages: Message[];
  }