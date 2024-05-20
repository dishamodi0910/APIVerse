import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/userUpdate';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/allUsers')
  allUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }
  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
  @Patch('/:id')
  updateUser(
    @Param('id', ParseIntPipe) userId: number,
    @Body() userData: UpdateUserDto,
  ) {
    return this.userService.updateUser(userId, userData);
  }
}
