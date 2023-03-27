import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import type { Family } from './interfaces/families.interface';
import { FamilyService } from './families.service';
import { CreateFamilyDto } from 'src/families/dto/family.dto';
import { UpdateFamilyDto } from './dto/family.dto';

@Controller('families')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Get()
  @HttpCode(200)
  async getFamilies(): Promise<Family[]> {
    return this.familyService.findAll();
  }

  @Post()
  @HttpCode(201)
  async createFamily(
    @Body() createFamilyDto: CreateFamilyDto,
  ): Promise<Family> {
    return this.familyService.create(createFamilyDto);
  }

  @Get('/:id')
  @HttpCode(200)
  async getFamilyByPk(@Param('id') id: string): Promise<Family | undefined> {
    const familyId = parseInt(id);
    return this.familyService.findByPk(familyId);
  }

  @Put('/:id')
  @HttpCode(201 | 400)
  async updateFamily(
    @Param('id') id: string,
    @Body() updateFamilyDto: UpdateFamilyDto,
  ): Promise<Family | Error> {
    try {
      const familyId = parseInt(id);

      if (familyId !== updateFamilyDto.id) {
        throw new Error('Family id does not match');
      }

      return this.familyService.update(familyId, updateFamilyDto);
    } catch (error) {
      return error.message;
    }
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteFamily(@Param('id') id: string): Promise<string | Error> {
    try {
      const familyId = parseInt(id);
      this.familyService.delete(familyId);
      return 'family deleted';
    } catch (error) {
      return error.message;
    }
  }
}
