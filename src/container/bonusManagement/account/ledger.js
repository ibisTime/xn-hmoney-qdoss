import React from 'react';
import {
    setTableData,
    setPagination,
    setBtnList,
    setSearchParam,
    clearSearchParam,
    doFetching,
    cancelFetching,
    setSearchData
} from '@redux/bonusManagement/ledger';
import { listWrapper } from 'common/js/build-list';
import { getQueryString, moneyFormat, moneyFormatSubtract, getCoinList, showWarnMsg } from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bonusManagementLedger,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class Ledger extends React.Component {
    constructor(props) {
        super(props);
        this.accountNumber = getQueryString('accountNumber', this.props.location.search) || '';
        this.isAccount = !!getQueryString('isAccount', this.props.location.search);
        this.buttons = [];
        if (this.isAccount) {
            this.buttons = [{
                code: 'goBack',
                name: '返回',
                check: false,
                handler: () => {
                    this.props.history.go(-1);
                }
            }];
        }
    }

    render() {
        const fields = [{
            field: 'channelType',
            title: '渠道',
            type: 'select',
            key: 'channel_type',
            search: true
        }, {
            field: 'currency',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'bizType',
            title: '业务类型',
            type: 'select',
            key: 'jour_biz_type_user',
            search: true
        }, {
            field: 'transAmountString',
            title: '变动金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'preAmountString',
            title: '变动前金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'postAmountString',
            title: '变动后金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'createDatetime',
            title: '创建时间',
            type: 'datetime'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            key: 'jour_status',
            search: true
        }, {
            field: 'bizNote',
            title: '生成说明'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            pageCode: 802320,
            searchParams: {
                accountNumber: this.accountNumber
            },
            buttons: this.buttons
        });
    }
}

export default Ledger;
