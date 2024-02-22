import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './User.controller';
import UserService from './User.service';
import { Roles } from '../../Modules/Databases/Sqlite.Local.Database/models/Role.model';
import { User } from '../../Modules/Databases/Sqlite.Local.Database/models/User.model';
import { UserRoles } from '../../Modules/Databases/Sqlite.Local.Database/models/UserRoles.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Roles, UserRoles], 'sqlite.local'),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export default class UserModule {}
