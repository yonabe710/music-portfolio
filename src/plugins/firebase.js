import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAnU04He62KPgpw2dprE-qzrOwwaMb2E1A',
    authDomain: 'music-portfolio-a9bd8.firebaseapp.com',
    databaseURL: 'https://music-portfolio-a9bd8.firebaseio.com',
    projectId: 'music-portfolio-a9bd8',
    storageBucket: 'music-portfolio-a9bd8.appspot.com',
    messagingSenderId: '560627509501',
    appId: '1:560627509501:web:792c6376a80cac95a4f694'
  }
  firebase.initializeApp(firebaseConfig)
  
  export default firebase