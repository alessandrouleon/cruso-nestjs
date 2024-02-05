import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModules } from './users/users.module';
import { ProductModules } from './produts/product.module';

@Module({
  imports: [UserModules, ProductModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
