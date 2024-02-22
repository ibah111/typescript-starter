import { Module } from '@nestjs/common';
import UserModule from './User/User.module';

@Module({
  providers: [UserModule],
})
export class ModuleOfPages {}
