import React from 'react';
import Register from '../../components/auth/Register';

import '../../less/auth.less';

class RegisterPage extends React.Component {
  static getInitialProps ({ctx}) {
      return {
        namespacesRequired: ['common']
      }
  }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <Register />
      </>
    )
  }
}

export default RegisterPage;
