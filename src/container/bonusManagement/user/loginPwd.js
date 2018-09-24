import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/loginPwd';
import {getUserId, showSucMsg, getQueryString} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.bonusManagementLoginPwd, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class LoginPwd extends React.Component {
    render() {
        const fields = [{
            title: '原密码',
            field: 'oldLoginPwd',
            type: 'password',
            required: true,
            minlength: 6
        }, {
            title: '新密码',
            field: 'newLoginPwd',
            type: 'password',
            required: true,
            minlength: 6
        }];
        return this.props.buildDetail({
            fields,
            buttons: [{
                title: '确认',
                handler: (params) => {
                    params.userId = getUserId();
                    this.props.doFetching();
                    fetch(805064, params).then(() => {
                        showSucMsg('操作成功');
                        this.props.cancelFetching();
                        setTimeout(() => {
                            location.reload(true);
                        }, 800);
                    }).catch(this.props.cancelFetching);
                },
                check: true,
                type: 'primary'
            }]
        });
    }
}

export default LoginPwd;
