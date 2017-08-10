const PUBCONF = require('../public/conf.js');

export const DEMO = {
  DEBUGMOCK : PUBCONF.DEBUGMOCK,

  INDEX_URL : PUBCONF.HOST + '/demo',
  INDEX_URL_MOCK : true && PUBCONF.DEBUGMOCK
}

export const ANOTHER_DEMO = {

}

export default {
    DEMO,
    ANOTHER_DEMO
}
