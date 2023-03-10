import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DynamicTableService } from './dynamic-table.service';
import { CreateDynamicTableDto } from './dto/create-dynamic-table.dto';
import { UpdateDynamicTableDto } from './dto/update-dynamic-table.dto';

@Controller('dynamic-table')
export class DynamicTableController {
  constructor(private readonly dynamicTableService: DynamicTableService) {}

  @Post()
  create(@Body() createDynamicTableDto: CreateDynamicTableDto) {
    return this.dynamicTableService.create(createDynamicTableDto);
  }

  @Get()
  findAll() {
    return this.dynamicTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicTableService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDynamicTableDto: UpdateDynamicTableDto,
  ) {
    return this.dynamicTableService.update(+id, updateDynamicTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicTableService.remove(+id);
  }
}
