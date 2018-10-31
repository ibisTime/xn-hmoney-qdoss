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
} from '@redux/inviteFriends/inDirectRecommend';
import {listWrapper} from 'common/js/build-list';
import {showWarnMsg, getUserId, moneyFormat, dateTimeFormat} from 'common/js/util';
import {CION_FMVP} from 'common/js/config';

@listWrapper(
    state => ({
        ...state.inviteFriendsInDirectRecommend,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class InDirectRecommend extends React.Component {
    render() {
        const fields = [{
            field: 'nickname',
            title: '昵称',
            search: true
        }, {
            field: 'mobile',
            title: '手机号',
            search: true
        }, {
            field: 'email',
            title: '邮箱',
            search: true
        }, {
            title: '注册时间',
            field: 'createDatetime',
            type: 'date',
            rangedate: ['createDatetimeStart', 'createDatetimeEnd'],
            render: dateTimeFormat,
            search: true
        }];
        return this.props.buildList({
            fields,
            rowKey: 'userId',
            pageCode: 802400,
            searchParams: {
                userId: getUserId()
            },
            btnEvent: {
                commissions: (selectedRowKeys) => {
                    if (!selectedRowKeys.length) {
                        showWarnMsg('请选择记录');
                    } else if (selectedRowKeys.length > 1) {
                        showWarnMsg('请选择一条记录');
                    } else {
                        this.props.history.push(`/myFriend/inDirectRecommend/commissions?userId=${selectedRowKeys[0]}`);
                    }
                }
            }
        });
    }
}

export default InDirectRecommend;
