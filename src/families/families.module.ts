import { Module } from '@nestjs/common';
import { FamilyController } from './families.controller';
import { FamilyService } from './families.service';

@Module({
  imports: [],
  controllers: [FamilyController],
  providers: [FamilyService],
})
export class FamilyModule {}
