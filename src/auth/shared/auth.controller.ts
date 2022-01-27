import { Request, Controller, Post, UseGuards } from '@nestjs/common';
import { APIResponse } from 'src/core/api.response';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from './auth.service';

@Controller({ path: 'smartsystem/api/v1/auth' })
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any) {
    return new APIResponse().ok(this.service.login(req.user));
  }
}
