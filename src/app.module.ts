import { CoreModule } from './core/core.module';
import { ExceptionModule } from './core/exceptions/exception.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    AuthModule,
    CoreModule,
    CommonModule,
  ],
  providers: [],
})
export class AppModule {}
