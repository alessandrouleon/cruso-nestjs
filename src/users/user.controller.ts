import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findListAll(): string {
    return 'List all Users';
  }
}
