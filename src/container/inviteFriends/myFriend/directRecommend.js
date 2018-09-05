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
            field: 'title',
            search: true,
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '注册时间',
            field: 'title'
        }, {
            title: '是否认证',
            field: 'title',
            type: 'select',
            search: true
        }, {
            title: '交易总额',
            field: 'title'
        }, {
            title: '佣金计算',
            field: 'title',
            amount: true
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

export default DirectRecommend;
