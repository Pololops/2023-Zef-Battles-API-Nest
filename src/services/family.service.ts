import { Injectable } from '@nestjs/common';
import { CreateFamilyDto, UpdateFamilyDto } from '../../dto/family.dto';

import * as data from '../../data/fake.json';

@Injectable()
export class FamilyService {
  private readonly families: Family[] = data;

  findAll(): Family[] {
    return this.families;
  }

  findByPk(id: number): Family | undefined {
    return this.families.find((family) => family.id === id);
  }

  create(createFamilyDto: CreateFamilyDto): Family {
    const newFamily = { ...createFamilyDto, id: data[data.length - 1].id + 1 };

    this.families.push(newFamily);
    return newFamily;
  }

  update(id: number, updateFamilyDto: UpdateFamilyDto): Family {
    const foundFamily = this.findByPk(id);
    if (!foundFamily) throw new Error('Family not found');

    const updatedFamily = {
      ...foundFamily,
      ...updateFamilyDto,
    };

    this.families.splice(this.families.indexOf(foundFamily), 1, updatedFamily);
    return updatedFamily;
  }

  delete(id: number): Family {
    const foundFamily = this.findByPk(id);
    if (!foundFamily) throw new Error('Family not found');

    this.families.splice(this.families.indexOf(foundFamily), 1);
    return foundFamily;
  }
}
