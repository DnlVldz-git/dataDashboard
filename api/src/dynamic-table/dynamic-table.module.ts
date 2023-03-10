import { Module } from '@nestjs/common';
import { DynamicTableService } from './dynamic-table.service';
import { DynamicTableController } from './dynamic-table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicTable } from './entities/dynamic-table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DynamicTable])],
  controllers: [DynamicTableController],
  providers: [DynamicTableService],
})
export class DynamicTableModule {}
