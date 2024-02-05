import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  findListAll(): string {
    return 'List all Products';
  }
}
