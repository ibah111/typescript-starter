import { Controller, Post } from '@nestjs/common';
import UserService from './User.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
