import { Test, TestingModule } from '@nestjs/testing';
import { DynamicTableController } from './dynamic-table.controller';
import { DynamicTableService } from './dynamic-table.service';

describe('DynamicTableController', () => {
  let controller: DynamicTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicTableController],
      providers: [DynamicTableService],
    }).compile();

    controller = module.get<DynamicTableController>(DynamicTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
