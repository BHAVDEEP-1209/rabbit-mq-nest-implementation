import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { Connection, Channel } from 'amqplib';

export class RabbitMQService {
    private connection: any;
    private channel: Channel;

    async init() {
        const connectionURL = 'amqp://localhost:5673';
        console.log('connectionURL', connectionURL)
        this.connection = await amqp.connect(connectionURL);
        this.channel = await this.connection.createChannel();

        this.connection.on('close', () => {
            console.log('RabbitMQ Connection Closed');
        })

        console.log('Rabbit MQ connected successfully!');
    }

    getChannel(): Channel {
        return this.channel;
    }

}