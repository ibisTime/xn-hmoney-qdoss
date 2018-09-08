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
} from '@redux/bonusManagement/oftenUseAddress';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.bonusManagementOftenUseAddress,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class OftenUseAddress extends React.Component {
    render() {
        const fields = [{
            title: '名称',
            field: 'title1'
        }, {
            title: '地址',
            field: 'title2'
        }];
        return this.props.buildList({
            fields,
            pageCode: 630020
        });
    }
}

export default OftenUseAddress;
