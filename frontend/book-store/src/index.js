import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'us-west-1',
        userPoolId: 'us-west-1_Iis5WeHjr',
        identityPoolId: 'us-west-1:0f20c5f8-269c-48f8-86d4-2d1d05910a49',
        userPoolWebClientId: '185lnnpppjmo5uvaa3it8u3me3',
        mandatorySignIn: false
    }
});

const myAppConfig = {
  'aws_appsync_graphqlEndpoint': 'https://lca3cmhgnbejfdwtjqiqgwxjxq.appsync-api.us-west-1.amazonaws.com/graphql',
  'aws_appsync_region': 'us-west-1',
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS'
}

Amplify.configure(myAppConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

