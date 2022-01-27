import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { APIResponse } from 'src/core/api.response';
import { User } from './user.entity';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller({ path: 'smartsystem/api/v1/user' })
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAllUser() {
    return new APIResponse().ok(await this.service.findAllUser());
  }

  @Post()
  // @ApiResponse({ status: 201, description: 'Registro inserido com sucesso.'})
  async save(@Body() user: User) {
    return new APIResponse().ok(await this.service.save(user));
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new APIResponse().ok(await this.service.findUserById(id));
  }
}
