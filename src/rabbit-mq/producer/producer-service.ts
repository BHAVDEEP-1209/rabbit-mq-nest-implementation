import { Inject, Injectable } from "@nestjs/common";
import { RabbitMQService } from "../rabbit-mq-connection";

@Injectable()
export class ProducerService {
    constructor(private readonly rabbitMQService: RabbitMQService) { }

    async sendMessage() {
        const channel = this.rabbitMQService.getChannel();
        const queue = 'hello';
        const msg = 'Hello world';

        const result = await channel.assertQueue(queue, { durable: false });

        console.log('result', result);

        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(`[x] Sent ${msg}`);
    }
}