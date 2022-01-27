import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { BadRequestExceptionFilter } from './badrequest.exception.filter';
import { ForbiddenExceptionFilter } from './forbidden.exception.filter';
import { HttpExceptionFilter } from './http.exception.filter copy';
import { InternalServerErrorExceptionFilter } from './internal.server.error.exception.filter';
import { NotFoundExceptionFilter } from './notfound.exception.filter';
import { UnauthorizedExceptionFilter } from './unauthorized.exception.filter';
import { UnprocessableEntityExceptionFilter } from './unprocessable.entity.exception.filter';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UnauthorizedExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: UnprocessableEntityExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ForbiddenExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorExceptionFilter,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class ExceptionModule {}
