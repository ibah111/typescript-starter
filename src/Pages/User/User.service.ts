import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Roles } from '../../Modules/Databases/Sqlite.Local.Database/models/Role.model';
import { User } from '../../Modules/Databases/Sqlite.Local.Database/models/User.model';
import { UserRoles } from '../../Modules/Databases/Sqlite.Local.Database/models/UserRoles.model';

@Injectable()
export default class UserService {
  constructor(
    @InjectModel(User, 'sqlite.local') private readonly modelUser: typeof User,
    @InjectModel(Roles, 'sqlite.local')
    private readonly modelRoles: typeof Roles,
    @InjectModel(UserRoles, 'sqlite.local')
    private readonly modelUserRoles: typeof UserRoles,
  ) {}

  async getAllUsers() {
    return await this.modelUser.findAll();
  }
}
