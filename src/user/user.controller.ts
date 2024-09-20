import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('range')
  getRange(@Query('max') max: number): string {
    return this.userService.getRange(max);
  }
}
