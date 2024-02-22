import { Module } from '@nestjs/common';
import DatabaseModule from './Database';

@Module({
  providers: [DatabaseModule],
})
export class ModuleOfModules {}
