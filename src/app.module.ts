import { Module } from '@nestjs/common';
import { ModuleOfPages } from './Pages/Pages.module';
import { ModuleOfModules } from './Modules';

@Module({
  imports: [ModuleOfPages, ModuleOfModules],
})
export class AppModule {}
