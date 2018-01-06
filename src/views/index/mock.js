import Mock from 'mockjs';
import CONF from './conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  index: {
    API: {
      GET: {
        "code": 200,
        "data": {
          "pin": 'wangqi',
          "name": '王奇'
        }
      }
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
