import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from '../config/database.config';
import { ConfigModule } from '@nestjs/config';
import envConfig from '../config/env.config';

@Module({
  imports: [
    MongooseModule.forRoot(databaseConfig().databaseUri),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
