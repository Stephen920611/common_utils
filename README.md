
# dfdz-utils v1.0.0

[![MIT License][license-image]][license-url]

## 简介
将一些js小功能，整合在一起。

## 安装
```shell
npm install dfdz-utils -S
```

## 快速使用
### 1、lodash
``` javascript
import D from 'dfdz-utils';

D.lodsh.isNumber(111)
```
更多的用法,可以去[lodash](https://www.lodashjs.com/)的官网去查看

### 2、moment
``` javascript
import D from 'dfdz-utils';

D.moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
```
更多的用法,可以去[moment](http://momentjs.cn/docs/)的官网去查看，PS：helper函数里基于moment封装了一个时间格式化，平时可以优先使用那个

### 3、helper
``` javascript
import D from 'dfdz-utils';

时间格式化：D.helper.dateFormat(new Date(),'YYYY-MM-DD')，格式如果不传就是'YYYY-MM-DD HH:mm:ss'，
浮点型保留小数：D.helper.toFixed(1213,2)，
```
dateFormat的具体用法，跟moment一样，只不过是基于moment做了一个常用的二次封装

### 4、storage

#### storageValue : <code>Object</code>
临时存储的变量

**Kind**: global constant
<a name="setStorage"></a>

#### setStorage ⇒ <code>boolean</code>
存储本地数据

**Kind**: global constant

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 数据名 |
| value | <code>\*</code> | 值 |
| [expire] | <code>number</code> \| <code>Date</code> | 过期时间,不传或0,表示永不过期 |

<a name="getStorage"></a>

#### getStorage ⇒ <code>\*</code>
获取本地数据

**Kind**: global constant

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 数据名 |

<a name="keepStorage"></a>

#### keepStorage
给localStorage续期

**Kind**: global constant

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 数据名 |
| expTime | <code>number</code> \| <code>Date</code> | 过期时间 |

<a name="removeStorage"></a>

#### removeStorage ⇒ <code>boolean</code>
删除本地数据

**Kind**: global constant

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 数据名 |

<a name="clearStorage"></a>

#### clearStorage
清空本地数据

**Kind**: global constant
<a name="update"></a>

#### update()
更新localStorage

**Kind**: global function
<a name="isExpired"></a>

#### isExpired(expire) ⇒ <code>boolean</code>
判断是否已过期

**Kind**: global function

| Param | Type |
| --- | --- |
| expire | <code>number</code> |

### 5、classNames
react官方推荐的classnames库
说明文档: https://github.com/JedWatson/classnames



[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://www.npmjs.com/package/stephen_utils
[npm-version-image]: http://img.shields.io/npm/v/moment.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/moment.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/moment?minimal=true
