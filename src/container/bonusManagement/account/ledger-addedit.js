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
} from '@redux/bonusManagement/ledger-addedit';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.bonusManagementLedgerAddedit,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class LedgerAddedit extends React.Component {
    render() {
        const fields = [{
            title: '用户',
            field: 'title1',
            search: true,
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '账户',
            field: 'title2'
        }, {
            title: '关系',
            field: 'title',
            type: 'select3',
            search: true,
            noVisible: true
        }, {
            title: '业务类型',
            field: 'title4'
        }, {
            title: '变动前金额',
            field: 'title5'
        }, {
            title: '变动金额',
            field: 'title6',
            amount: true
        }, {
            title: '变动后金额',
            field: 'title7',
            amount: true
        }, {
            title: '变动时间',
            field: 'title8'
        }, {
            title: '备注',
            field: 'title9'
        }];
        return this.props.buildList({
            fields,
            pageCode: 630020,
            buttons: [{
                code: 'goBack',
                name: '返回',
                handler: () => {
                    this.props.history.go(-1);
                }
            }]
        });
    }
}

export default LedgerAddedit;
