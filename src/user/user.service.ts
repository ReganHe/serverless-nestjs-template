import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  /**
   * 获取指定范围的数组
   * @param max 数组最大值
   * @returns 数组
   */
  getRange(max: number): any {
    if (max < 0) {
      return {
        status: 1001,
        data: [],
        message: 'Invalid input',
      };
    }

    var result: string[] = [];
    for (var i = 1; i <= max; i++) {
      result.push(i.toString());
    }
    return {
      status: 0,
      data: result,
      message: 'OK',
    };
  }
}
