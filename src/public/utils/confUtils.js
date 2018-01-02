/**
 * [mergeMock 函数]
 * @param  {[type]} pMock [页面开关]
 * @param  {[type]} mMock [模块开关]
 * @return {[merge 后对象]} 
 */
import S from '../conf'

export const mergeMock = function(pMock, mMock) {
  for (let item in mMock) {
    mMock[item].MOCK = S.DEBUGMOCK && pMock && mMock[item].MOCK;
  }
  return mMock;
}

/**
 * 初始化 mock 
 */
export const initMock = function(Mock, CONF, mockData) {

  return function() {
    const ts = ['GET', 'PUT', 'DELETE', 'POST'],
      m = Object.keys(mockData)[0];
    for (let key in CONF[m]['API']) {
      const t = key.split('_')[0];
      const type = ts.indexOf(t) !== -1 ? t : 'GET';
      if ('GET' === type) {
        const _urlString = m + '/' + (new Date().getTime()) + '/' + t + '/';
        CONF[m]['API'][key] = _urlString;
        Mock.mock(new RegExp(S.HOST + _urlString), type.toLocaleLowerCase(), mockData[m]['API'][key]);
      } else {
        Mock.mock(S.HOST + CONF[m]['API'][key], type.toLocaleLowerCase(), mockData[m]['API'][key]);
      }
    }
  }()
}
