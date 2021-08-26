import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "us-west-1",
    userPoolId: "us-west-1_pXf342I2x",
    identityPoolId: "us-west-1:ecd01ae1-c91f-4866-9751-2a1f531bf7f7",
    userPoolWebClientId: "5fdol0hldluiupgfi6mnu03pc6",
    mandatorySignIn: false
  }
});

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    "https://i7wkel6srfftrla37srkf4dagi.appsync-api.us-west-1.amazonaws.com/graphql",
  aws_appsync_region: "us-west-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS"
};

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
