import { Module } from '@nestjs/common';
import DatabaseModule from './Databases/Database.module';

@Module({
  imports: [DatabaseModule],
})
export class ModuleOfModules {}
