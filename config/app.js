module.exports.firebase = {
  apiKey: "AIzaSyCJzDXg_d0gbM8I3WDGYyQlr3cGjRx99Lg",
  authDomain: "oldster-d40f5.firebaseapp.com",
  databaseURL: "https://oldster-d40f5.firebaseio.com",
  projectId: "oldster-d40f5",
  storageBucket: "oldster-d40f5.appspot.com",
  messagingSenderId: "69502473686"
}

module.exports.line = {
  apiUrl: 'https://api.line.me/v2',
  authUrl: 'https://access.line.me',
  callbackUrl: 'http://localhost:3000/line/callback',
  endpoints: {
    api: {
      accessToken: '/oauth/accessToken'
    },
    auth: {
      authorize: '/dialog/oauth/weblogin'
    }
  },
  channelId: '1617703525',
  channelSecret: '01b3da5b3e11c0994154c834c8e0d14d',
  jwtAlgorithms: ['HS256'],
  jwtIssuer: 'htps://access.line.me',
}
