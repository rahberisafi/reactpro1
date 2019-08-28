import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

// short circuit operator
render() {
return this.state.isLoggedIn && <div>Welcome Isafi</div>
}
// conditional operator is best
  // render() {
  //   return this.state.isLoggedIn ? (
  //     <div>Welcome Isafi</div>
  //   ) : (
  //     <div>Welcome Guest</div>
  //   )
  // }

  // render() {
  //   let message
  //   if (this.state.isLoggedIn){
  //     message = <div>Welcome Isafi</div>
  //   } else {
  //     message = <div>Welcome Guest</div>
  //   }
  //   return <div>{message}</div>
  // }

  // render() {
  //   if (this.state.isLoggedIn) {
  //   return <div>Welcome Isafi</div>
  //   } else {
  //   return <div>Welcome Guest</div>
  //   }
  // }


}

export default UserGreeting
