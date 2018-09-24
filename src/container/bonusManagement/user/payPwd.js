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
            field: 'title',
            title: '手机号',
            value: this.state.mobile,
            readonly: true
        }, {
            field: 'type',
            title: '验证码',
            required: true
        }, {
            field: 'urgentStatus',
            title: '支付密码',
            required: true
        }, {
            field: 'urgentStatu',
            title: '确认支付密码',
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
                  param.operator = getUserId();
                  this.props.doFetching();
                  fetch(630576, param).then(() => {
                    showSucMsg('操作成功');
                    this.props.cancelFetching();
                    setTimeout(() => {
                      this.props.history.go(-1);
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
