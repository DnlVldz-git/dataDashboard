import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDynamicTableDto } from './dto/create-dynamic-table.dto';
import { UpdateDynamicTableDto } from './dto/update-dynamic-table.dto';
import { DynamicTable } from './entities/dynamic-table.entity';

@Injectable()
export class DynamicTableService {
  constructor(
    @InjectRepository(DynamicTable)
    private readonly tableRepository: Repository<DynamicTable>,
  ) {}
  create(createDynamicTableDto: CreateDynamicTableDto) {
    console.log(createDynamicTableDto);
    this.tableRepository.create(createDynamicTableDto);
  }

  findAll() {
    return `This action returns all dynamicTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicTable`;
  }

  update(id: number, updateDynamicTableDto: UpdateDynamicTableDto) {
    return `This action updates a #${id} dynamicTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicTable`;
  }
}
