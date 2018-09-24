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
} from '@redux/inviteFriends/directRecommend';
import {listWrapper} from 'common/js/build-list';
import {getUserId, moneyFormat} from 'common/js/util';

@listWrapper(
    state => ({
        ...state.inviteFriendsDirectRecommend,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class DirectRecommend extends React.Component {
    render() {
        const fields = [{
            title: '注册时间',
            field: 'title2'
        }, {
            title: '是否认证',
            field: 'title3',
            type: 'select',
            search: true
        }, {
            title: '交易总额',
            field: 'tradeCount',
            render: (v, data) => {
                return moneyFormat(v, '', 'X');
            }
        }, {
            title: '交易佣金',
            field: 'tradeAwardCount',
            render: (v, data) => {
                return moneyFormat(v, '', 'X');
            }
        }, {
            title: '注册佣金',
            field: 'regAwardCount',
            render: (v, data) => {
                return moneyFormat(v, '', 'X');
            }
        }];
        return this.props.buildList({
            fields,
            rowKey: 'userId',
            pageCode: 802399,
            searchParams: {
                userId: getUserId()
            },
            btnEvent: {
                commissions: (selectedRowKeys) => {
                    this.props.history.push(`/myFriend/directRecommend/commissions?userId=${selectedRowKeys[0]}`);
                }
            }
        });
    }
}

export default DirectRecommend;
