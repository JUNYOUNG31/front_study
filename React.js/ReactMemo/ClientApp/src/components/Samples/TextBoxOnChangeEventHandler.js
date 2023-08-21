import React, {Component} from "react";

class TextBoxOnChangeEventHandler extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userPassword: ""
    }
    this.handleuserNameChange = this.handleuserNameChange.bind(this)
    this.handleuserPasswordChange = this.handleuserPasswordChange.bind(this)
  }

  handleuserNameChange(e) {
    this.setState({userName: e.target.value, })
  }

  handleuserPasswordChange(e) {
    this.setState({userPassword: e.target.value, })
  }
  
  render() {
    return (
      <>
        <input type="text" placeholder="아이디" onChange={this.handleuserNameChange} />
        <input type="text" placeholder="아이디" onChange={this.handleuserPasswordChange} />
        <hr/>
        아이디: {this.state.userName}
        비밀번호: {this.state.userPassword}
      </>
    )
  }
}

export default TextBoxOnChangeEventHandler