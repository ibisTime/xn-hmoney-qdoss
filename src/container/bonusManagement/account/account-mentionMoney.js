import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/account-mentionMoney';
import { getQueryString, getUserId, moneyFormat } from 'common/js/util';
import { DetailWrapper } from 'common/js/build-detail';

@DetailWrapper(
    state => state.bonusManagementAccountMentionMoney,
    { initStates, doFetching, cancelFetching, setSelectData, setPageData, restore }
)
class AccountMentionMoney extends React.Component {
    constructor(props) {
        super(props);
        this.accountNumber = getQueryString('accountNumber', this.props.location.search);
    }
    render() {
        const symbole = 'FMVP';
        const fields = [{
            field: 'amount',
            title: '取现金额',
            required: true,
            coinAmount: true,
            coin: symbole,
            formatter: (v, data) => {
                if (v) {
                    return moneyFormat(v, '', symbole);
                } else {
                    return '';
                }
            }
        }, {
            field: 'payCardInfo',
            title: '区块链类型',
            value: symbole,
            required: true,
            hidden: true
        }, {
            field: 'payCardNo',
            title: '提现地址',
            required: true
        }, {
            field: 'applyNote',
            title: '申请说明',
            required: true
        }, {
            field: 'tradePwd',
            title: '交易密码',
            type: 'password',
            required: true
        }];
        return this.props.buildDetail({
            fields,
            view: false,
            addCode: '802350',
            beforeSubmit: (params) => {
                params.accountNumber = this.accountNumber;
                params.applyUser = getUserId();
                return params;
            }
        });
    }
}

export default AccountMentionMoney;
