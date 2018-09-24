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
import {getUserId} from 'common/js/util';

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
            title: '地址',
            field: 'address'
        }, {
            title: '币种',
            field: 'symbol'
        }, {
            field: 'label',
            title: '标签'
        }, {
            field: 'isCerti',
            title: '是否认证账户',
            type: 'select',
            data: [{
                key: '0',
                value: '否'
            }, {
                key: '1',
                value: '是'
            }],
            keyName: 'key',
            valueName: 'value'
        }, {
            field: 'createDatetime',
            title: '创建时间',
            type: 'datetime'
        }];
        return this.props.buildList({
            fields,
            rowKey: 'id',
            pageCode: 802015,
            delete: 802011,
            searchParams: {
                userId: getUserId()
            }
        });
    }
}

export default OftenUseAddress;
