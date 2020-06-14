import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from "./services/fbLogin"
import googleLogin from "./services/googleLogin"
import './App.css';

class App extends Component {

  render() {
    const responseFacebook = async (response) => {
      let fbResponse  = await fbLogin(response.accessToken)
      console.log(fbResponse);
      console.log(response);
    }

    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="<FACEBOOK APP ID>"
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />


        <GoogleLogin
          clientId="<GOOGLE CLIENT ID>"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}

export default App;
