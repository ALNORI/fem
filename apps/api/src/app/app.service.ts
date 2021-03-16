import { Injectable } from '@nestjs/common';
import { Message } from '@fem-production-aangular/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
