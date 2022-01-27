import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { APIResponse } from 'src/core/api.response';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const message = 'Desculpe não conseguimos processar sua requisição.';
    const errors = exception.getResponse()['message'];
    const apiResponde = new APIResponse().error(errors, message);
    response.status(status).json(apiResponde);
  }
}
