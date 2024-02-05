import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

interface BodyUser {
  username: string;
  email: string;
  password: string;
}

@Controller('users')
export class UserController {
  @Post('/create')
  create(@Body() data: BodyUser) {
    return {
      ...data,
      id: randomUUID(),
    };
  }
  @Get()
  findListAll(): string {
    return 'List all Users';
  }
}
