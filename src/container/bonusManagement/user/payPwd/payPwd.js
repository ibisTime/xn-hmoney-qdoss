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
        this.hideStatus = false;
        this.isUserId = false;
    }

    render() {
        const fields = [{
            field: 'title',
            title: '手机号',
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
            // code: this.code,
            // view: this.view,
            addCode: 630020
            // editCode: 632722,
            // detailCode: 632726,
            // beforeSubmit: (params) => {
            //     params.scopePeopleList = [{
            //         scopeType: params.scopeType,
            //         peopleCode: params.peopleCode
            //     }];
            //     delete params.scopeType;
            //     delete params.peopleCode;
            //     return params;
            // }
        });
    }
}

export default PayPwd;
