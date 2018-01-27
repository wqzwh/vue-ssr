import Mock from 'mockjs';
import CONF from './conf';
import { initMock } from '@/public/utils/confUtils';

const mData = {
  index: {
    API: {
      GET: {
        "code": 200,
        "data": [
          {
            name: '推荐',
            type: 0
          },
          {
            name: '居家',
            type: 1
          },
          {
            name: '餐厨',
            type: 2
          },
          {
            name: '服装',
            type: 3
          },
          {
            name: '电器',
            type: 4
          },
          {
            name: '洗护',
            type: 5
          },
          {
            name: '杂货',
            type: 6
          }
        ]
      },
      GETBOTTOM: {
        "code": 200,
        "data": [
          {
            href: '/',
            value: '首页',
            type: 'index'
          },
          {
            href: '/',
            value: '识物',
            type: 'topic'
          },
          {
            href: '/',
            value: '分类',
            type: 'cate'
          },
          {
            href: '/',
            value: '购物车',
            type: 'cart'
          },
          {
            href: '/',
            value: '个人',
            type: 'ucenter'
          }
        ]
      }
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
