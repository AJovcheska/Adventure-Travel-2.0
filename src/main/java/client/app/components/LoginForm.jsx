var React = require('react');
var {IndexLink} = require('react-router');
var backendApi = require('backendApi');

var LoginForm = React.createClass({
  handleLogin: function(e) {
    var password = this.refs.password.value;
    var email = this.refs.email.value;
    backendApi.loginUser(email, password).then((response) => {
      if (response.data) {
        this.refs.email.value = '';
        this.refs.password.value = '';
        window.open('http://localhost:3000/#/successRegistration?_k=se8ue5', "_self");
      } else {

      }
    }, function(errorMessage) {
      console.log(errorMessage);
    });
  },
  render: function() {
    return (
      <form>
       <div className="loginContainer">
         <h1>Login</h1>

         <label for="email"><b>Email</b></label>
         <input type="text" placeholder="Enter Email" ref="email" required/>

         <label for="password"><b>Password</b></label>
         <input type="password" placeholder="Enter Password" ref="password" required/>

         <div className="clearfix">
           <button type="button" class="cancelbtn">
              <IndexLink to="/">Cancel</IndexLink>
           </button>
           <button type="submit" class="loginbtn" onClick={this.handleLogin}>Login</button>
         </div>
       </div>
      </form>
    );
  }
});

module.exports = LoginForm;
