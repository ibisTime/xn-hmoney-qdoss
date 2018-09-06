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
            title: '用户名',
            field: 'title1',
            search: true,
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '注册时间',
            field: 'title2'
        }, {
            title: '是否认证',
            field: 'title3',
            type: 'select',
            search: true
        }, {
            title: '交易总额',
            field: 'title4'
        }, {
            title: '佣金计算',
            field: 'title5',
            amount: true
        }];
        return this.props.buildList({
            fields,
            pageCode: 630020,
            btnEvent: {
                commissions: (selectedRowKeys) => {
                    this.props.history.push(`/myFriend/direct/edit?code=${selectedRowKeys[0]}`);
                }
            }
        });
    }
}

export default DirectRecommend;
