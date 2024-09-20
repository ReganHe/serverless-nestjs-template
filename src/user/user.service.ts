import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getRange(max: number): any {
    var result = [];
    for (var i = 1; i <= max; i++) {
      result.push(i);
    }
    return {
      status: 0,
      data: result,
      message: 'OK',
    };
  }
}
