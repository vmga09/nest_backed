import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { CastsService } from './casts.service';
import { CreateCastDto } from './dto/create-cast.dto';
import { UpdateCastDto } from './dto/update-cast.dto';

@Controller('casts')
export class CastsController {
  constructor(private readonly castsService: CastsService) {}

  @Post()
  create(@Body() createCastDto: CreateCastDto) {
    return this.castsService.create(createCastDto);
  }

  @Get()
  findAll() {
    return this.castsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cat = await this.castsService.findOne(+id);
    
    if(!cat){ 
      throw new Error('Cast not found');
    }
    return cat
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCastDto: UpdateCastDto) {
    return this.castsService.update(+id, updateCastDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.castsService.remove(+id);
  }
}
