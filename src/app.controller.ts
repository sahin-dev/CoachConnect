import { Controller, Get, Ip } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello() {
    return {message:`Server is listening on http://10.10.20.44:3005`};
  }
}
