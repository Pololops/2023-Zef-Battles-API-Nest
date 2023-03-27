import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { FamilyModule } from './families/families.module';

@Module({
  imports: [HelloModule, FamilyModule],
})
export class AppModule {}
