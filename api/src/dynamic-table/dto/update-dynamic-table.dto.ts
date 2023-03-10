import { PartialType } from '@nestjs/mapped-types';
import { CreateDynamicTableDto } from './create-dynamic-table.dto';

export class UpdateDynamicTableDto extends PartialType(CreateDynamicTableDto) {}
