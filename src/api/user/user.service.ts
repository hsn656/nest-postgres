import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getUser(username: string): Promise<User> {
    return this.repository.findOneBy({ username });
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    body.password = await hash(body.password, 10);
    const user: User = this.repository.create({
      ...body,
    });

    return this.repository.save(user);
  }

  public async updateUser(
    userId: number,
    body: UpdateUserDto,
  ): Promise<string> {
    await this.repository.update(
      {
        id: userId,
      },
      {
        ...body,
      },
    );

    return 'success';
  }
}
