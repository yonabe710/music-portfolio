<template>
  <div class="signin">
    <h2>Sign in</h2>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
  </div>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'Signin',
  mounted () {
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    // const ui = new firebaseui.auth.AuthUI(firebase.auth())
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          const twuserid = authResult.additionalUserInfo.username
          const twphotourl = firebase.auth().currentUser.photoURL
          const userid = firebase.auth().currentUser.uid
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult, redirectUrl)
          var db = firebase.firestore()
          db.collection('uid').doc(userid).set({
            twuserid: `${twuserid}`,
            twphotourl: `${twphotourl}`
          },{merge: true})
            .then(function () {
              console.log(twuserid)
              console.log(twphotourl)
            })
            .catch(function (error) {
              console.error('Error writing document: ', error)
            })
          return true
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none'
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '/mypage', // Sign in後の遷移先
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: ''
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
