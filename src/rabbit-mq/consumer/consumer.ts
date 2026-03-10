import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitMQService } from '../rabbit-mq-connection';

@Injectable()
export class ConsumerService implements OnModuleInit {
    constructor(private rabbitMQService: RabbitMQService) { }

    async onModuleInit() {
        const channel = this.rabbitMQService.getChannel();
        const queue = 'hello';
        await channel.assertQueue(queue, { durable: false });

        console.log(`[*] Waiting for messages in ${queue}`);

        channel.consume(
            queue,
            (msg) => {
                if (msg) {
                    console.log(`[x] Received ${msg.content.toString()}`);
                }
            },
            { noAck: true },
        );
    }
}