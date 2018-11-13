import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/payPwd';
import {getQueryString, getUserId, showSucMsg} from 'common/js/util';
import {DetailWrapper} from 'common/js/build-detail';
import {getUserById} from 'api/user';
import fetch from 'common/js/fetch';

@DetailWrapper(
    state => state.bonusManagementPayPwd, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class PayPwd extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
        this.state = {
            mobile: ''
        };
    }
    componentDidMount() {
        getUserById({ userId: getUserId() }).then(data => {
            this.setState({ mobile: data.mobile });
        }).catch(() => {});
    }
    render() {
        const fields = [{
            field: 'mobile',
            title: '手机号',
            value: this.state.mobile,
            readonly: true
        }, {
            field: 'smsCaptcha',
            title: '验证码',
            type: 'smsCaptcha',
            bizType: '805066',
            smsCaptchaMobile: this.state.mobile,
            required: true
        }, {
            field: 'tradePwd',
            title: '交易密码',
            type: 'password',
            required: true
        }];
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            beforeSubmit: {
                userId: getUserId()
            },
            buttons: [{
                title: '确认',
                handler: (param) => {
                  param.userId = getUserId();
                  this.props.doFetching();
                  fetch(805066, param).then(() => {
                    showSucMsg('操作成功');
                    this.props.cancelFetching();
                    setTimeout(() => {
                      location.reload(true);
                    }, 1000);
                  }).catch(this.props.cancelFetching);
                },
                check: true,
                type: 'primary'
            }]
        });
    }
}

export default PayPwd;
