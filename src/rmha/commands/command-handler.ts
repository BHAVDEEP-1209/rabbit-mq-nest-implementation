
import { CommandFactory } from 'nest-commander';
import { AppModule } from 'src/app.module';

async function bootstrap() {
    console.log('ruuning command bootstrap')
    await CommandFactory.run(AppModule, ['warn', 'error']);
}

bootstrap();
