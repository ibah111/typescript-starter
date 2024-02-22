import { Controller, OnModuleInit, Post } from '@nestjs/common';
import UserService from './User.service';

@Controller()
export class UserController implements OnModuleInit {
  constructor(private readonly userService: UserService) {}
  onModuleInit() {
    this.onModuleInit();
  }

  @Post()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
}
