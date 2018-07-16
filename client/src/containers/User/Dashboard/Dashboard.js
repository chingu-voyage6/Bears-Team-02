import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/UserActions'

  class Dashboard extends Component {
    componentDidMount(){
      this.props.actions.dashboard()
    }

    render() {
      if(this.props.user) {
        return <div>Username: {this.props.user.username}</div>
      } else {
          return <div>Loading...</div>
      }
    }
  }

  const mapStateToProps = (state) => {
    return { user: state.User.user }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)