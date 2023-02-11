import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public first_name: string;

  @IsString()
  @IsNotEmpty()
  public middle_name: string;

  @IsString()
  @IsNotEmpty()
  public last_name: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsEmail()
  public email: string;

  @IsDateString()
  public dob: string;

  @IsString()
  @IsNotEmpty()
  public state: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public gender: string;

  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  public first_name: string;

  @IsString()
  @IsNotEmpty()
  public middle_name: string;

  @IsString()
  @IsNotEmpty()
  public last_name: string;

  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsEmail()
  public email: string;

  @IsDateString()
  public dob: string;

  @IsString()
  @IsNotEmpty()
  public state: string;

  @IsString()
  @IsNotEmpty()
  public city: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsString()
  @IsNotEmpty()
  public gender: string;

  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;
}
