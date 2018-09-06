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
} from '@redux/bonusManagement/settledAccounts-addedit';
import {showWarnMsg, getUserId} from 'common/js/util';
import {listWrapper} from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.bonusManagementSettledAccountsAddedit,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class AccountsAddedit extends React.Component {
    render() {
        const fields = [{
            title: '用户',
            field: '用户',
            search: true,
            noVisible: true
        }, {
            title: '提成项',
            field: 'title2'
        }, {
            title: '提成项说明',
            field: 'title3'
        }, {
            title: '提成金额',
            field: 'title4'
        }, {
            title: '发生时间',
            field: '申请时间',
            type: 'date',
            rangedate: ['applyDatetimeStart', 'applyDatetimeEnd'],
            render: (v, d) => {
                return d.dateTimeFormat;
            },
            search: true
        }, {
            title: '状态',
            field: 'title5',
            type: 'select',
            search: true
        }, {
            title: '结算人',
            field: 'title5'
        }, {
            title: '结算时间',
            field: 'title5'
        }, {
            title: '结算说明',
            field: 'title6'
        }];
        return this.props.buildList({
            fields,
            pageCode: 630020,
            buttons: [{
                code: 'goBack',
                name: '返回',
                handler: () => {
                    this.props.history.push(`/user/oftenUseAddress`);
                }
            }]
        });
    }
}

export default AccountsAddedit;
