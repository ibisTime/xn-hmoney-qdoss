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
} from '@redux/inviteFriends/directRecommend-addedit';
import {showWarnMsg, getUserId} from 'common/js/util';
import {listWrapper} from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.inviteFriendsDirectRecommendAddedit,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class RecommendAddedit extends React.Component {
    render() {
        const fields = [{
            title: '提成项',
            field: 'title',
            type: 'select',
            search: true,
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '提成项说明',
            field: 'title'
        }, {
            title: '提成金额',
            field: 'title'
        }, {
            title: '发生时间',
            field: 'title',
            search: true
        }, {
            title: '状态',
            field: 'title',
            amount: true
        }, {
            title: 'applyDatetime',
            field: '申请时间',
            type: 'date',
            rangedate: ['applyDatetimeStart', 'applyDatetimeEnd'],
            render: (v, d) => {
                return d.dateTimeFormat;
            },
            search: true
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
                        // this.props.history.push(`/myFriend/direct/edit?code=${selectedRowKeys[0]}`);
                    // }
                }
            }
        });
    }
}

export default RecommendAddedit;
