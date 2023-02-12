import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginBodySwagger } from 'src/swagger/LoginBodySwagger';
import { LoginSchema } from 'src/swagger/LoginSchema';
import { UnauthorizedErrorSchema } from 'src/swagger/UnauthorizedErrorSchema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiTags('auth')
  @ApiBody(LoginBodySwagger)
  @ApiResponse(LoginSchema)
  @ApiResponse(UnauthorizedErrorSchema)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
