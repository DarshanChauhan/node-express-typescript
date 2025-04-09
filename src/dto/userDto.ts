import { IsEmail, MinLength, IsEnum } from "class-validator";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export class RegisterUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}

export class LoginUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
