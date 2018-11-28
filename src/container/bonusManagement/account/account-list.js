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
} from '@redux/bonusManagement/account-list';
import {listWrapper} from 'common/js/build-list';
import {getQueryString, moneyFormat, moneyFormatSubtract, getCoinList, showWarnMsg, getUserId, showSucMsg, moneyParse} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bonusManagementAccountList,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class AccountList extends React.Component {
    render() {
        const fields = [{
            field: 'currency',
            title: '币种',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value',
            search: true
        }, {
            field: 'accountNumber',
            title: '账号'
        }, {
            field: 'amount',
            title: '余额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'frozenAmount',
            title: '冻结金额',
            render: (v, data) => {
                return moneyFormat(v, '', data.currency);
            }
        }, {
            field: 'availableAmount',
            title: '可用余额',
            render: (v, data) => {
                var amount = data.amount;
                var frozenAmount = data.frozenAmount;

                return moneyFormatSubtract(amount, frozenAmount, '', data.currency);
            }
        }, {
            field: 'createDatetime',
            title: '创建时间',
            type: 'datetime'
        }];
        return this.props.buildList({
                fields,
                rowKey: 'accountNumber',
                pageCode: '802300',
                searchParams: {
                    kind: '0',
                    userId: getUserId()
                },
                btnEvent: {
                    // 账户概要
                    accountSummary: (selectedRowKeys, selectedRows) => {
                        if (!selectedRowKeys.length) {
                            showWarnMsg('请选择记录');
                        } else if (selectedRowKeys.length > 1) {
                            showWarnMsg('请选择一条记录');
                        } else {
                            this.props.history.push(`/account/account/accountSummary?coin=${selectedRows[0].currency}`);
                        }
                    }
                }
            });
    }
}

export default AccountList;
