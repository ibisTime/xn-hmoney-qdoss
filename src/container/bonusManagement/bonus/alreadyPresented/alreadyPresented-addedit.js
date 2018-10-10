import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/alreadyPresented-addedit';
import { DetailWrapper } from 'common/js/build-detail';
import {getQueryString, getUserId, dateTimeFormat, moneyFormat} from 'common/js/util';

@DetailWrapper(
    state => state.bonusManagementAlreadyPresentedAddedit, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class PresentedAddedit extends React.Component {
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }
    render() {
        const fields = [{
            field: 'code',
            title: '编号',
            search: true
        }, {
            field: 'accountName',
            title: '账号',
            type: 'select',
            render: (v, data) => {
                if (data.applyUserInfo) {
                    let tmpl = data.applyUserInfo.mobile ? data.applyUserInfo.mobile : data.applyUserInfo.email;
                    if (data.applyUserInfo.kind === 'Q') {
                        return data.applyUserInfo.realName + '(' + tmpl + ')';
                    }
                    return data.applyUserInfo.nickname + '(' + tmpl + ')';
                }
                return '';
            }
        }, {
            field: 'amount',
            title: '提现金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency) + data.currency;
            }
        }, {
            field: 'fee',
            title: '手续费',
            required: true,
            formatter: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'actualAmount',
            title: '实际到账金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency) + data.currency;
            }
        }, {
            field: 'channelType',
            title: '渠道',
            type: 'select',
            key: 'channel_type',
            search: true
        }, {
            title: '区块链类型',
            field: 'payCardInfo'
        }, {
            title: '提现地址',
            field: 'payCardNo'
        }, {
            field: 'applyDatetime',
            title: '申请时间',
            type: 'date',
            rangedate: ['applyDateStart', 'applyDateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            title: '申请说明',
            field: 'applyNote'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'withdraw_status',
            search: true
        }, {
            field: 'approveNote',
            title: '审核意见'
        }, {
            field: 'approveUser',
            title: '审核人',
            render: (v, data) => {
                return data.approveUserInfo ? data.approveUserInfo.loginName : '';
            }
        }, {
            field: 'approveDatetime',
            title: '审核时间',
            type: 'date',
            rangedate: ['approveDateStart', 'approveDateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'approveNote',
            title: '审核意见'
        }];
        return this.props.buildDetail({
            fields,
            _keys: ['withdraw'],
            code: this.code,
            view: this.view,
            detailCode: '802356'
        });
    }
}

export default PresentedAddedit;
