import React from 'react';
import { Row, InputNumber, Input, Button, Col, Card } from 'antd';
import './mentionMoney.css';

export default class SelectSizesDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: ''
    };
  }

  render() {
    return (
        <div className="wrap">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
          <Card>
            <p>提币</p>
            <p><span className="must">*</span>提现地址</p>
            <Input className="inp" placeholder="请输入提现地址" />
            <p><span className="must">*</span>提币数量</p>
            <InputNumber className="inp" min={0.01} max={10000} defaultValue={100} />
            <p><span className="must">*</span>支付密码</p>
            <Input className="inp" type="password" placeholder="请输入支付密码" />
            <p><span className="must">*</span>备注</p>
            <Input className="inp" placeholder="请输入提现备注" />
            <Button className="yes" type="primary">确认提现</Button>
          </Card>
          </Col>
        </Row>
      </div>
    );
  }
}