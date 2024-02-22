import { Module } from '@nestjs/common';
import { ModuleOfPages } from './Pages';

@Module({
  providers: [ModuleOfPages, ModuleOfPages],
})
export class AppModule {}
