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
} from '@redux/bonusManagement/generalSituation';
import { listWrapper } from 'common/js/build-list';
import {getUserId, dateFormat} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.bonusManagementGeneralSituation,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class GeneralSituation extends React.Component {
    render() {
        const fields = [{
            field: 'settleCount',
            title: '结算金额',
            coin: 'FMVP',
            coinAmount: true
        }, {
            field: 'unsettleCount',
            title: '未结算金额',
            coin: 'FMVP',
            coinAmount: true
        }, {
            field: 'nosettleCount',
            title: '不结算金额',
            coin: 'FMVP',
            coinAmount: true
        }, {
            field: 'nextUnsettleCount',
            title: '下月未结算数量',
            coin: 'FMVP',
            coinAmount: true
        }, {
            field: 'date',
            title: '时间',
            render: (v, data) => {
                return dateFormat(data.startDate) + '至' + dateFormat(data.endDate);
            }
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: 802396,
            searchParams: {
                userId: getUserId()
            },
            btnEvent: {
                anOpenAccountQuery: (selectedRowKeys) => {
                    this.props.history.push(`/bonus/anOpenAccountQuery?isGeneral=1`);
                },
                settleAccount: (selectedRowKeys) => {
                    this.props.history.push(`/bonus/settledAccounts?isGeneral=1`);
                }
            }
        });
    }
}

export default GeneralSituation;
