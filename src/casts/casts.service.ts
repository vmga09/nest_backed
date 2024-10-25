import { Body, Injectable } from '@nestjs/common';
import { CreateCastDto } from './dto/create-cast.dto';
import { UpdateCastDto } from './dto/update-cast.dto';
import { In, Repository } from 'typeorm';
import { Cast } from './entities/cast.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CastsService {

  constructor(
    @InjectRepository(Cast) 
    private readonly castRepository: Repository<Cast>,
  ) {}
  async create( createCastDto: CreateCastDto) {
    const cat = this.castRepository.create(createCastDto);
    return this.castRepository.save(cat);
  }

  async findAll() {
    return await this.castRepository.find();
  }

  async findOne(id: number) {
    return await this.castRepository.findOneBy({id});
  }

  async update(id: number, updateCastDto: UpdateCastDto) {
    return await this.castRepository.update({id}, updateCastDto);
  }

  async remove(id: number) {
    return await this.castRepository.softDelete({id});
  }
}
