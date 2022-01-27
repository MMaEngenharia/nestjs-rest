import { Module } from '@nestjs/common';
import { ExceptionModule } from './exceptions/exception.module';

@Module({
  imports: [ExceptionModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
