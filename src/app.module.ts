import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloModule } from './hello/hello.module';
import { FamilyModule } from './families/families.module';

@Module({
  imports: [ConfigModule.forRoot(), HelloModule, FamilyModule],
})
export class AppModule {}
