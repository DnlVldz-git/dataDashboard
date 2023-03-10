import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MainService } from './main.service';
import { CreateMainDto } from './dto/create-main.dto';
import { UpdateMainDto } from './dto/update-main.dto';

@Controller('main')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Post()
  create(@Body() createMainDto: CreateMainDto) {
    return this.mainService.create(createMainDto);
  }

  @Get('/year/:year')
  findAllByYear(@Param('year') year: string) {
    return this.mainService.findAllByYear(+year);
  }

  @Get('/year-month/:year/:month')
  findAllByMonthYear(
    @Param('year') year: string,
    @Param('month') month: string,
  ) {
    return this.mainService.findAllByMonthYear(+year, +month);
  }

  @Get('/year-month-day/:year/:month/:day')
  findAllByMonthYearDay(
    @Param('year') year: string,
    @Param('month') month: string,
    @Param('day') day: string,
  ) {
    return this.mainService.findAllByMonthYearDay(+year, +month, +day);
  }

  @Get()
  findAll() {
    return this.mainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMainDto: UpdateMainDto) {
    return this.mainService.update(+id, updateMainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainService.remove(+id);
  }
}
