import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/userCreate.dto';
import { LoginUserDto } from './dto/userLogin.dto';
import { Response } from 'express';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() UserDto: CreateUserDto) {
    return this.authService.register(UserDto);
  }
  @Post('/login')
  login(
    @Body() UserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.login(UserDto, response);
  }
}
