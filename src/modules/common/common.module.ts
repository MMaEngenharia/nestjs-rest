import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './people/address.entity';
import { People } from './people/people.entity';
@Module({
  imports: [TypeOrmModule.forFeature([People, Address])],
  controllers: [],
  providers: [],
})
export class CommonModule {}
