import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/UserActions'

  class Logout extends Component {
    componentWillMount() {
      this.props.actions.logout()
    }
    render() {
      return(
        <div>Goodbye!</div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(null, mapDispatchToProps)(Logout)