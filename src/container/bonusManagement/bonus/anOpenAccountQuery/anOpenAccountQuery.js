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
} from '@redux/bonusManagement/anOpenAccountQuery';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.bonusManagementAnOpenAccountQuery,
    parentCode: state.menu.subMenuCode
  }),
  {
    setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData
  }
)
class AnOpenAccountQuery extends React.Component {
    render() {
        const fields = [{
            title: '用户',
            field: '用户',
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
            pageCode: 802395
        });
    }
}

export default AnOpenAccountQuery;
