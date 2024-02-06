import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create.user.dto';
import { CreateUserUseCase } from './useCases/create.user.usecase';


@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase){}

  @Post()
  async create(@Body() data: CreateUserDTO) {
   return await this.createUserUseCase.execute(data)
  }

  @Get()
  findListAll(): string {
    return 'List all Users';
  }
}
