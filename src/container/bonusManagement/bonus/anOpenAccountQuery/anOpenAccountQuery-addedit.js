import React from 'react';
import {
    initStates,
    doFetching,
    cancelFetching,
    setSelectData,
    setPageData,
    restore
} from '@redux/bonusManagement/anOpenAccountQuery-addedit';
import { DetailWrapper } from 'common/js/build-detail';

@DetailWrapper(
    state => state.bonusManagementAnOpenAccountQueryAddedit, {
        initStates,
        doFetching,
        cancelFetching,
        setSelectData,
        setPageData,
        restore
    }
)
class QueryAddedit extends React.Component {
    render() {
        const fields = [{
            title: '用户',
            field: '用户',
            readonly: true
        }, {
            title: '提成项',
            field: 'title2',
            readonly: true
        }, {
            title: '提成项说明',
            field: 'title3',
            readonly: true
        }, {
            title: '提成金额',
            field: 'title4',
            readonly: true
        }, {
            title: '发生时间',
            field: '申请时间',
            type: 'date',
            rangedate: ['applyDatetimeStart', 'applyDatetimeEnd'],
            render: (v, d) => {
                return d.dateTimeFormat;
            },
            search: true,
            readonly: true
        }];
        return this.props.buildDetail({
            fields,
            buttons: [{
                title: '返回',
                handler: (param) => {
                  this.props.history.go(-1);
                }
            }]
        });
    }
}

export default QueryAddedit;
