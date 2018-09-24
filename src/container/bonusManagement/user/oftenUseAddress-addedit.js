import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/oftenUseAddress-addedit';
import { getQueryString, getCoinList, getUserId } from 'common/js/util';
import { DetailWrapper } from 'common/js/build-detail';

@DetailWrapper(
    state => state.bonusManagementOftenUseAddressAddedit, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class addressAddedit extends React.Component {
    render() {
        const fields = [{
            title: '地址',
            field: 'address',
            required: true
        }, {
            title: '币种',
            field: 'symbol',
            type: 'select',
            data: getCoinList(),
            keyName: 'key',
            valueName: 'value',
            required: true
        }, {
            field: 'label',
            title: '标签',
            required: true
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
            valueName: 'value',
            required: true
        }];
        return this.props.buildDetail({
            fields,
            addCode: 802010,
            beforeSubmit: (params) => {
                params.userId = getUserId();
                return params;
            }
        });
    }
}

export default addressAddedit;
