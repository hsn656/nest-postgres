import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LocalStrategy } from './local-strategy';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { User } from '../user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: '300s' },
    }),
  ],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
