import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule, TerminusModule, HttpModule],
  controllers: [AppController],
})
export class AppModule {}
