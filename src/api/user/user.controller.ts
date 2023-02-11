import {
  Body,
  Controller,
  Get,
  Inject,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  public getProfile(@Request() req): Promise<User> {
    return this.service.getUser(req.user.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('profile')
  public updateProfile(
    @Request() req,
    @Body() body: UpdateUserDto,
  ): Promise<any> {
    return this.service.updateUser(req.user.userId, body);
  }
}
