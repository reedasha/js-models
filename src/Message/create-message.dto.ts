import { Templates } from "Templates/template.entity";
import { Recepient } from "Recepient/recepient.entity";

export class CreateMessageDto {
    readonly id: number;
    readonly subject: string;
    readonly content: string;
    readonly attachment: string;
    readonly template: Templates;
    readonly recepients: Recepient[];
  }
