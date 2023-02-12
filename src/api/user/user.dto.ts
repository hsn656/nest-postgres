import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public first_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public middle_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public last_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public password: string;

  @ApiProperty()
  @IsEmail()
  public email: string;

  @ApiProperty()
  @IsDateString()
  public dob: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public city: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public gender: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;
}

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public first_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public middle_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public last_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public username: string;

  @ApiProperty()
  @IsEmail()
  public email: string;

  @ApiProperty({ description: 'date of birth' })
  @IsDateString()
  public dob: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public state: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public city: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public gender: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  public avatar_url: string;
}

export class UserDto {
  @Expose()
  public id: number;

  @Expose()
  public first_name: string;

  @Expose()
  public middle_name: string;

  @Expose()
  public last_name: string;

  @Expose()
  public username: string;

  @Expose()
  public email: string;

  @Expose()
  public dob: string;

  @Expose()
  public state: string;

  @Expose()
  public city: string;

  @Expose()
  public phone: string;

  @Expose()
  public gender: string;

  @Expose()
  public avatar_url: string;
}
