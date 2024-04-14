import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserRepository } from '../database/repository/user.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get('/hello')
  getHello() {
    return this.appService.getHello();
  }

  @Get('/')
  getUser() {
    return this.appService.getUser();
  }
}
