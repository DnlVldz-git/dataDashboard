import { Module } from '@nestjs/common';
import { MainService } from './main.service';
import { MainController } from './main.controller';
import { Main } from './entities/main.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Main])],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
