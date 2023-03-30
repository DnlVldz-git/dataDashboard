import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';
import { Main } from './main/entities/main.entity';
import { TableModule } from './table/table.module';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';
import { DynamicTable } from './dynamic-table/entities/dynamic-table.entity';
import { Table } from './table/entities/table.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'dataexamination',
      entities: [Main, DynamicTable, Table],
      synchronize: true,
    }),
    MainModule,
    TableModule,
    DynamicTableModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
