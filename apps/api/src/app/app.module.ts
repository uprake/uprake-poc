import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from '../config/database.config';

@Module({
  imports: [MongooseModule.forRoot(databaseConfig().databaseUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
