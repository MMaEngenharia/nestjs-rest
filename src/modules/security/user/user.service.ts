import { Injectable } from '@nestjs/common';
import { APIResponse } from 'src/core/api.response';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findUserById(id: number) {
    return this.userRepository.findById(id);
  }

  findAllUser() {
    return this.userRepository.findAll();
  }

  save(user: User) {
    this.userRepository.save(user);
    return this.userRepository.create(user);
  }

  login(email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .select('user.id, user.email, user.password')
      .where(
        'user.email =:email and user.active = true and user.excluded = false',
        { email },
      )
      .getRawOne();
  }
}
