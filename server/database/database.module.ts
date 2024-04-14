import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlModuleOption } from './database.config';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlModuleOption())
  ],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class DatabaseModule {}
