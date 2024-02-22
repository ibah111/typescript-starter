import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Users from '../../Modules/Database/Models/User.model';
import Roles from '../../Modules/Database/Models/Role.model';
import UserRole from '../../Modules/Database/Models/UserRole.model';
import { UserController } from './User.controller';
import UserService from './User.service';

@Module({
  imports: [SequelizeModule.forFeature([Users, Roles, UserRole], 'local')],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
