import { Module } from '@nestjs/common';
import { CastsModule } from './casts/casts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [CastsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user_crud',
      password: 'asd12345',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BreedsModule
  ],

})
export class AppModule {}
