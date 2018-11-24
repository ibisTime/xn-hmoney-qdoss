import React from 'react';
import { withRouter } from 'react-router-dom';
import cookies from 'browser-cookies';
import { SYSTEM_NAME } from 'common/js/config';

@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    let userId = cookies.get(SYSTEM_NAME + 'userId');
    if (userId) {
      return;
    }
    this.props.history.push('/login');
  }
  render() {
    return null;
  }
}

export default AuthRoute;
