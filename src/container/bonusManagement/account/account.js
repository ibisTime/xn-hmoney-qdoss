import React from 'react';
import ReactDom from 'react-dom';
import {
  Select,
  Row,
  Col,
  Card,
  Button
} from 'antd';
import fetch from 'common/js/fetch';

const Option = Select.Option;
const gridStyle = {
  width: '400px'
  // textAlign: 'center'
};
export default class SelectSizesDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'X币余额：'
    };
  }

  goFlow() {
    this.props.history.push(`/account/moneyWater`);
  }

  render() {
    return (
      <div className="Wrap">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
          <Card style={gridStyle}>
            <p>X币余额：</p>
            <Button type="primary">提币</Button>
            <Button type="primary" onClick={() => this.goFlow()}>资金流水</Button>
            <p>
              <span>未结算X币：</span><span>拉新奖励总额：</span>
            </p>
            <p>
              <span>已结算X币：</span><span>交易佣金总额：</span>
            </p>
            <p>
              <span>已提现X币：</span><span>平台特殊奖励总额：</span>
            </p>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}