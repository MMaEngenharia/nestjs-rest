import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  ForbiddenException,
} from '@nestjs/common';
import { Response } from 'express';
import { APIResponse } from 'src/core/api.response';

@Catch(ForbiddenException)
export class ForbiddenExceptionFilter implements ExceptionFilter {
  catch(exception: ForbiddenException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const message = 'Desculpe você não permissão para acessar esse recurso.';
    const apiResponde = new APIResponse().error([], message);
    response.status(status).json(apiResponde);
  }
}
