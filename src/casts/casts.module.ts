import { Module } from '@nestjs/common';
import { CastsService } from './casts.service';
import { CastsController } from './casts.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cast } from './entities/cast.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cast])],
  controllers: [CastsController],
  providers: [CastsService],
})
export class CastsModule {}
