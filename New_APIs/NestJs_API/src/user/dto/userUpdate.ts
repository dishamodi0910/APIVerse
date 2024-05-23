import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phoneNumber: string;
}
