import { Controller, Get } from '@nestjs/common';
import { ProducerService } from './producer/producer-service';

@Controller('send')
export class RabbitMQController {
    constructor(private readonly publisherService: ProducerService) { }

    @Get()
    send() {
        return this.publisherService.sendMessage();
    }
}