import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsStrongPassword,
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'passwordMatch', async: false })
export class PasswordMatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${relatedPropertyName} and password must match`;
  }
}

export function PasswordMatch(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: ['password'],
      validator: PasswordMatchConstraint,
    });
  };
}

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsStrongPassword()
  password: string;

  @IsStrongPassword()
  @PasswordMatch()
  cpassword: string;
}
