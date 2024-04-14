import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repository/user.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly userRepository: UserRepository
  ) {
  }

  getHello(): string {
    return 'Hello World!';
  }
  getUser() {
    return this.userRepository.find()
  }
}
