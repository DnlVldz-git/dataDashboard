import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}
  async create(createTableDto: CreateTableDto) {
    console.log(createTableDto);
    const res = await this.tableRepository.save(createTableDto);
    return res;
  }

  findAll() {
    return `This action returns all table`;
  }

  findOne(id: number) {
    return this.tableRepository.findOneBy({ id: id });
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
