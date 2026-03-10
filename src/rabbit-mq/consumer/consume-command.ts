import { RabbitMQService } from "../rabbit-mq-connection";
import { ConsumerService } from "./consumer";

async function start() {
    const rabbit = new RabbitMQService();
    await rabbit.init();

    const consumer = new ConsumerService(rabbit);
    await consumer.onModuleInit();
}

start();