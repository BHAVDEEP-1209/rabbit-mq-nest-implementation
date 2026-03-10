import { Module } from "@nestjs/common";
import { RabbitMQService } from "./rabbit-mq-connection";
import { ProducerService } from "./producer/producer-service";
import { RabbitMQController } from "./rabbit-mq-controller";
import { RabbitMQChannelProvider } from "./rabbit-md-factory";
import { ConsumerService } from "./consumer/consumer";

@Module({
    imports: [],
    providers: [ProducerService, RabbitMQChannelProvider],
    controllers: [RabbitMQController]
    // exports: [RabbitMQService]
})
export class RabbitMQModule { }