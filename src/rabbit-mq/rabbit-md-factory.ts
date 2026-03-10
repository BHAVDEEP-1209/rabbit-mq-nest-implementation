import { RabbitMQService } from './rabbit-mq-connection';

export const RabbitMQChannelProvider = {
    provide: RabbitMQService,
    useFactory: async () => {
        const rabbitService = new RabbitMQService();
        await rabbitService.init();
        return rabbitService;
    },
};