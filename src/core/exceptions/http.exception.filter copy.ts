import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { APIResponse } from 'src/core/api.response';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const message = 'Desculpe não conseguimos processar sua requisição.';
    const errors = exception.getResponse()['message'];
    const apiResponde = new APIResponse().error(errors, message);
    response.status(status).json(apiResponde);
  }
}
