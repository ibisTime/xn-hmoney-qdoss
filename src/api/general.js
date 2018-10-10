import fetch from 'common/js/fetch';

// 加载七牛token
export function getQiniuToken() {
    return fetch(630091);
}

// 根据ckey获取系统参数
export function getSystemConfigCkey(ckey) {
    if (getSystemConfigCkey[ckey]) {
        return Promise.resolve(getSystemConfigCkey[ckey]);
    }
    return fetch(630047, {
        ckey
    }).then((data) => {
        getSystemConfigCkey[ckey] = data;
        return Promise.resolve(data);
    });
}

// 发送验证码
export function sendCaptcha(data) {
    return fetch(630090, {
        bizType: data.bizType,
        mobile: data.mobile
    });
}
