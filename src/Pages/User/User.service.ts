import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Users from '../../Modules/Database/Models/User.model';
import Roles from '../../Modules/Database/Models/Role.model';

@Injectable()
export default class UserService {
  constructor(
    @InjectModel(Users, 'local') private readonly modelUser: Users,
    @InjectModel(Roles, 'local') private readonly modelRole: Roles,
  ) {}

  async getAllUsers() {}

  async getUserById() {}

  async getAllRoles() {}

  async getRoleById() {}
}
