import React from 'react';

import { App, View, Statusbar } from 'framework7-react';

import { connect } from 'react-redux'

import f7params from './routes'
import './App.css'

// import routes from '../routes';

class HomePage extends React.PureComponent {

  // componentDidMount() {
  //   this.$f7ready((f7) => {
  //     f7.dialog.alert('Component mounted');
  //   });
  // }
  componentDidMount() {
    this.props.dispatch({ type: "getlogin" })
  }
  render() {
    return (
      <App params={f7params} color-theme="orange" >
        <Statusbar></Statusbar>
        {/* Current View/Router, initial page will be loaded from home.jsx component */}
        <View main url="/" />
        {/* <Link onClick={() => this.$f7router.navigate('/detail/')}>detail</Link>
        <Link onClick={() => this.$f7router.back()}>Go Back</Link> */}
      </App>
    );
  }
};

export default connect(state => {
  // console.log(state)
  return {
    state
  }
})(HomePage)
