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
            field: 'title1',
            type: 'select',
            search: true,
            render: (v, d) => {
                return d.userName + '+' + d.userphone;
            }
        }, {
            title: '提成项说明',
            field: 'title2'
        }, {
            title: '提成金额',
            field: 'title3'
        }, {
            title: '发生时间',
            field: 'title4'
        }, {
            title: '状态',
            field: 'title5',
            amount: true
        }, {
            title: '发生时间',
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

export default RecommendAddedit;
