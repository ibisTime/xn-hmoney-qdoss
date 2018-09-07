import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/oftenUseAddress-addedit';
import { getQueryString } from 'common/js/util';
import {
    DetailWrapper
} from 'common/js/build-detail';

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
    constructor(props) {
        super(props);
        this.code = getQueryString('code', this.props.location.search);
        this.view = !!getQueryString('v', this.props.location.search);
    }
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
        return this.props.buildDetail({
            fields,
            code: this.code,
            view: this.view,
            addCode: 630010,
            editCode: 630012,
            detailCode: 630017
        });
    }
}

export default addressAddedit;
