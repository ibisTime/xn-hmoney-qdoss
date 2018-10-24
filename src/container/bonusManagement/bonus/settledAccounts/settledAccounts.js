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
} from '@redux/bonusManagement/settledAccounts';
import { listWrapper } from 'common/js/build-list';
import {getQueryString, getUserId, dateTimeFormat, moneyFormat} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bonusManagementSettledAccounts,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class SettledAccounts extends React.Component {
    constructor(props) {
        super(props);
        this.isGeneral = !!getQueryString('isGeneral', this.props.location.search);
        this.buttons = null;
        if (this.isGeneral) {
            this.buttons = [{
                code: 'goBack',
                name: '返回',
                check: false,
                handler: () => {
                    this.props.history.push(`/bonus/generalSituation`);
                }
            }];
        }
    }

    render() {
        const fields = [{
            field: 'count',
            title: '佣金',
            coin: 'FMVP',
            coinAmount: true
        }, {
            field: 'currency',
            title: '币种'
        }, {
            field: 'refType',
            title: '佣金类型',
            type: 'select',
            key: 'award_ref_type'
        }, {
            field: 'refNote',
            title: '佣金说明'
        }, {
            field: 'status',
            title: '状态',
            type: 'select',
            data: [{
                key: '0',
                value: '待结算'
            }, {
                key: '1',
                value: '已结算'
            }],
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'handleDatetime',
            title: '结算时间',
            type: 'date',
            rangedate: ['applyDateStart', 'applyDateEnd'],
            render: dateTimeFormat,
            search: true
        }, {
            field: 'refCode',
            title: '关联单号'
        }, {
            field: 'remark',
            title: '备注'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: '802395',
            searchParams: {
                userId: getUserId(),
                status: '1'
            },
            buttons: this.buttons
        });
    }
}

export default SettledAccounts;
