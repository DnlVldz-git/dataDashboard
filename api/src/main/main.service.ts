import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMainDto } from './dto/create-main.dto';
import { UpdateMainDto } from './dto/update-main.dto';
import { Main } from './entities/main.entity';

@Injectable()
export class MainService {
  constructor(
    @InjectRepository(Main)
    private readonly mainRepository: Repository<Main>,
  ) {}

  create(createMainDto: CreateMainDto) {
    return 'This action adds a new main';
  }

  findAll() {
    return `This action returns all main`;
  }

  findOne(id: number) {
    return `This action returns a #${id} main`;
  }

  update(id: number, updateMainDto: UpdateMainDto) {
    return `This action updates a #${id} main`;
  }

  remove(id: number) {
    return `This action removes a #${id} main`;
  }

  // Custom methods

  async findAllByYear(year: number) {
    return await this.mainRepository.find({ where: { anio: year } });
  }

  async findAllByMonthYear(year: number, month: number) {
    return await this.mainRepository.find({
      where: { anio: year, mes: month },
    });
  }

  async findAllByMonthYearDay(year: number, month: number, day: number) {
    return await this.mainRepository.find({
      where: { anio: year, mes: month, dia: day },
    });
  }
}
