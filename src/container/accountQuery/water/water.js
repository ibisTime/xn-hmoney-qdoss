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
} from '@redux/accountQuery/water';
import {showWarnMsg, getUserId} from 'common/js/util';
import {listWrapper} from 'common/js/build-list';
import { Modal } from 'antd';
import fetch from 'common/js/fetch';

@listWrapper(
    state => ({
        ...state.accountQueryWater,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class QueryWater extends React.Component {
    render() {
        const fields = [{
            title: '标题',
            field: 'title',
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '用户',
            field: 'title'
        }, {
            title: '账户',
            field: 'title'
        }, {
            title: '业务类型',
            field: 'title'
        }, {
            title: '变动前金额',
            field: 'title',
            amount: true
        }, {
            title: '变动金额',
            field: 'title'
        }, {
            title: '变动后金额',
            field: 'title'
        }, {
            title: '变动时间',
            field: 'title',
            type: 'datetime'
        }, {
            title: '备注',
            field: 'title'
        }];
        return this.props.buildList({
            fields,
            pageCode: 632725,
            btnEvent: {
                edit: (selectedRowKeys, selectedRows) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else if (selectedRows[0].status !== '0') {
                        showWarnMsg('不是可修改的状态！');
                    } else {
                        this.props.history.push(`/notice/notice/addedit?code=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default QueryWater;
