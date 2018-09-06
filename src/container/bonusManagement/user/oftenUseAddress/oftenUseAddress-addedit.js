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
} from '@redux/bonusManagement/oftenUseAddress-addedit';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
    state => ({
        ...state.bonusManagementOftenUseAddressAddedit,
        parentCode: state.menu.subMenuCode
    }),
    {
        setTableData, clearSearchParam, doFetching, setBtnList,
        cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class AddressAddedit extends React.Component {
    render() {
        const fields = [{
            title: '名称',
            field: 'title1',
            search: true,
            noVisible: true
        }, {
            title: '地址',
            field: 'title2',
            search: true,
            noVisible: true
        }];
        return this.props.buildList({
            fields,
            pageCode: 630020,
            buttons: [{
                code: 'add',
                name: '确认',
                handler: () => {
                    this.props.history.go(-1);
                }
            }]
        });
    }
}

export default AddressAddedit;
