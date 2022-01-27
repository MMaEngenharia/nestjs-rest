import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { APIResponse } from 'src/core/api.response';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const message = 'Desculpe você não autorização para acessar esse recurso.';
    const apiResponde = new APIResponse().error([], message);
    response.status(status).json(apiResponde);
  }
}
