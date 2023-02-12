import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { GetProfileSchema } from 'src/swagger/GetProfileSchema';
import { UnauthorizedErrorSchema } from 'src/swagger/UnauthorizedErrorSchema';
import { UpdateUserSchema } from 'src/swagger/UpdateUserSchema';
import { CreateUserDto, UpdateUserDto, UserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('account')
@Serialize(UserDto)
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @ApiResponse(GetProfileSchema)
  @ApiTags('auth')
  @Post('signup')
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @ApiBearerAuth()
  @ApiTags('profile')
  @ApiResponse(GetProfileSchema)
  @ApiResponse(UnauthorizedErrorSchema)
  @UseGuards(AuthGuard('jwt'))
  @Get('get-profile-data')
  public getProfile(@Request() req): Promise<User> {
    return this.service.getUser(req.user.username);
  }

  @ApiBearerAuth()
  @ApiTags('profile')
  @ApiResponse(UpdateUserSchema)
  @ApiResponse(UnauthorizedErrorSchema)
  @UseGuards(AuthGuard('jwt'))
  @Post('update-profile-info')
  public updateProfile(
    @Request() req,
    @Body() body: UpdateUserDto,
  ): Promise<any> {
    return this.service.updateUser(req.user.userId, body);
  }
}
