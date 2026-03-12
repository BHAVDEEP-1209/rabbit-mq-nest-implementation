import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from './rabbit-mq/rabbit-mq-module';
import { RmhaModule } from './rmha/rmha-module';

@Module({
  imports: [RmhaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
