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
    render() {
        const fields = [{
            title: '用户',
            field: 'title',
            type: 'select',
            search: true,
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '账户',
            field: 'title'
        }, {
            title: '业务类型',
            field: 'title'
        }, {
            title: '变动前金额',
            field: 'title'
        }, {
            title: '变动金额',
            field: 'title',
            amount: true
        }, {
            title: '变动后金额',
            field: 'title',
            amount: true
        }, {
            title: '变动时间',
            field: 'title'
        }, {
            title: '备注',
            field: 'title'
        }];
        return this.props.buildList({
            fields,
            pageCode: 630020,
            btnEvent: {
                commissions: (selectedRowKeys) => {
                    // if (!selectedRowKeys.length) {
                    //     showWarnMsg('请选择记录');
                    // // } else if (selectedRowKeys.length > 1) {
                    // //     showWarnMsg('请选择一条记录');
                    // } else {
                        this.props.history.push(`/myFriend/direct/edit?code=${selectedRowKeys[0]}`);
                    // }
                }
            }
        });
    }
}

export default Ledger;
