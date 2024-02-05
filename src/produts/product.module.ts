import { Module } from '@nestjs/common';
import { ProductController } from './product.controllers';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [],
})
export class ProductModules {}
