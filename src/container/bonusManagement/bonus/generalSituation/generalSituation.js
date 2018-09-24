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
            title: '结算日期',
            field: 'title0',
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '结算数量',
            field: 'title1'
        }, {
            title: '期间',
            field: 'title2'
        }, {
            title: '结算后当时余额',
            field: 'title3'
        }, {
            title: '未结算数量',
            field: 'title4'
        }];
        return this.props.buildList({
            fields,
            pageCode: 802395,
            btnEvent: {
                anOpenAccountQuery: (selectedRowKeys) => {
                    this.props.history.push(`/bonus/anOpenAccountQuery?code=${selectedRowKeys[0]}`);
                },
                settleAccount: (selectedRowKeys) => {
                    this.props.history.push(`/bonus/settledAccounts?code=${selectedRowKeys[0]}`);
                }
            }
        });
    }
}

export default GeneralSituation;
