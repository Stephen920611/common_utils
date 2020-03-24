/**
 * @description
 * @Version Created by Stephen on 2020/3/20.
 * @Author Stephen
 * @license dongfangdianzi
 */

import lodash from 'lodash';
import helper from './core/helper';
import Socket from './core/socket';
import moment from 'moment';
import classNames from 'classnames';
import { setStorage, getStorage, clearStorage, keepStorage, removeStorage } from './core/storage';

/**
 * @type {{classNames: classNames, moment, helper, storage: {setStorage: setStorage, getStorage: getStorage, clearStorage: clearStorage, keepStorage: keepStorage, removeStorage: removeStorage}, lodash, }}
 */

const S = {
    // 说明文档: https://www.lodashjs.com/
    lodash: lodash,
    //时间格式化
    // 说明文档: http://momentjs.cn/docs/
    moment,
    //公共方法
    helper,

    //react官方推荐的classnames库
    // 说明文档: https://github.com/JedWatson/classnames
    classNames,
    //websocket
    Socket,

    //storage
    storage: {
        setStorage,
        getStorage,
        clearStorage,
        keepStorage,
        removeStorage
    },

};

export default S;