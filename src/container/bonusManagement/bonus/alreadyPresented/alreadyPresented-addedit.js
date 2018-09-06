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
} from '@redux/bonusManagement/alreadyPresented-addedit';
import {showWarnMsg, getUserId} from 'common/js/util';
import {listWrapper} from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.bonusManagementAlreadyPresentedAddedit,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class PresentedAddedit extends React.Component {
    render() {
        const fields = [{
            title: '渠道',
            type: 'select',
            field: '渠道',
            search: true,
            noVisible: true
        }, {
            title: '业务类型',
            type: 'select',
            field: '业务类型',
            search: true,
            noVisible: true
        }, {
            title: '状态',
            type: 'select',
            field: '状态',
            search: true,
            noVisible: true
        }, {
            title: '提成项',
            field: 'title2'
        }, {
            title: '提成项说明',
            field: 'title3'
        }, {
            title: '提成金额',
            field: 'title4'
        }, {
            title: '发生时间',
            field: 'title5'
        }, {
            title: '结算时间',
            field: 'title6'
        }, {
            title: '领取时间',
            field: 'title7'
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

export default PresentedAddedit;
