import { Module } from '@nestjs/common';
import { HelloModule } from './modules/hello.module';
import { FamilyModule } from './modules/family.module';

@Module({
  imports: [HelloModule, FamilyModule],
})
export class AppModule {}
