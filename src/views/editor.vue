<template>
  <div id="container">
    <header class="header">
      <b-navbar class = "notification is-primary" fixed-top>
        <template slot="start">
          <b-navbar-item href="https://twitter.com/">
            <img class="thumbnail" :src= this.twphotourl>
            <h2 class="userid">{{this.twusername}}</h2>
          </b-navbar-item>
          <!-- <b-navbar-item href="#">
              Home
          </b-navbar-item>
          <b-navbar-item href="#">
              Documentation
          </b-navbar-item>
          <b-navbar-dropdown label="Info">
              <b-navbar-item href="#">
                  About
              </b-navbar-item>
              <b-navbar-item href="#">
                  Contact
              </b-navbar-item>
          </b-navbar-dropdown> -->
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="/mypage" class="button is-primary">
                      <strong>Mypage</strong>
                    </router-link>
                    <button type="button" class="button is-light" @click="signOut">
                      <strong>Sign out</strong>
                    </button>
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
    </header>

    <div id="main">
      <section class="hero is-light">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Profile
            </h1>
            <h2 class="subtitle">
              {{profile}}
            </h2>
            <textarea v-model = "profile" cols="50" rows="5"></textarea>
            <button type=“submit” @click="sendProfile" >save</button>
            <!-- <ul class="follow">
              <li><a href="https://twitter.com/k_onshitsu" class="flowbtn7 fl_tw7"><i><font-awesome-icon :icon = "['fab','twitter']"></font-awesome-icon></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCoOnBhAiccYdkJUbgwdorxg/" class="flowbtn7 fl_yu7"><i><font-awesome-icon :icon = "['fab','youtube']"></font-awesome-icon></i></a></li>
              <li><a href="FacebookページのURL" class="flowbtn7 fl_fb7"><i><font-awesome-icon :icon = "['fab','facebook']"></font-awesome-icon></i></a></li>
            </ul> -->
          </div>
        </div>
      </section>
      <div class="tile">
        <div class="tile is-parent is-vertical is-8">
          <article class="tile is-child notification is-gainsboro">
            <p class="title">YouTube</p>
            <div class = "movie-wrap">
              <iframe width="854" height="400" :src="this.videoID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <form @submit.prevent="submitForm">
              <div>
                <textarea v-model = "yturl" @input="$v.yturl.$reset()" @blur="$v.yturl.$touch()" placeholder="YouTubeのURLをコピーして貼付け" cols="50" rows="5"></textarea>
              </div>
              <div v-if="$v.yturl.$error">
                <span class="texterror">YouTubeのURLでお願い！</span>
              </div>
                <button type=“submit” @click="getVideoID">change</button>
                <button type=“submit” @click="sendVideoID">save</button>
            </form>
          </article>

          <article class="tile is-child notification is-gainsboro">
            <p class="title">Instagram</p>
            <!-- <p>{{this.instaID}}</p> -->
            <div class="instagram-content">
              <instagram-embed 
                class="instagram-picture"
                :url="this.instaID"
                :key="instaID"
                :max-width=500
                v-if="instaID"
              />
            </div>
            <form @submit.prevent="submitForm">
              <div>
                <textarea v-model = "igurl" @input="$v.igurl.$reset()" @blur="$v.igurl.$touch()" cols="50" rows="5" placeholder="Instagramのリンクをコピーして貼付け"></textarea>
              </div>
              <div v-if="$v.igurl.$error">
                <span class="texterror">InstagramのURLでお願い！</span>
              </div>
              <button type=“submit” @click="getInstaID">change</button>
              <button type=“submit” @click="sendInstaID">save</button>
            </form>
          </article>
        </div>

        <div class="tile is-parent is-vertical is-4">
          <article class="tile is-child notification is-gainsboro">
            <p class="title">Twitter</p>
            <div class="content" style="width:832px;" :options="{ cards: 'hidden' }">
              <Tweet :id="tweetID" :key="tweetID" v-if="tweetID"></Tweet>
            <form @submit.prevent="submitForm">
              <div>
                <textarea v-model = "twurl" @input="$v.twurl.$reset()" @blur="$v.twurl.$touch()" cols="50" rows="5" placeholder="Tweetのリンクをコピーして貼付け"></textarea>
              </div>
              <div v-if="$v.twurl.$error">
                <span class="texterror">TwitterのURLでお願い！</span>
              </div>
              <button type=“submit” @click="getTweetID">change</button>
              <button type=“submit” @click="sendTweetID">save</button>
            </form>
            </div>
          </article>
          
          <article class="tile is-child notification is-gainsboro">
            <p class="title">Sound sample</p>
            <div class="soundcloud">
              <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" :src="`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.soundID}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`"></iframe>
              <textarea v-model = "scurl"></textarea>
              <button type=“submit” @click="getSoundID">change</button>
              <button type=“submit” @click="sendSoundID">save</button>
              <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/633309999&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/568198284&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/679809245&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
          </article>
        </div>
      </div>
      <div class="end-button">
        <router-link to="/mypage"><button type=“submit” class="all-save" @click="sendAll" >all save</button></router-link>
        <router-link to="/mypage"><button type=“button” class="complete">complete!</button></router-link>
      </div>
    </div>

    <footer class="footer">
      <div class="tile">
        <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light">
              <p class="title">sairilab</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import {Tweet} from 'vue-tweet-embed'
import InstagramEmbed from 'vue-instagram-embed'
import url from 'vuelidate/lib/validators/url'
/* eslint-disable no-new */
export default {
  name: 'Editor',
  data: function () {
    return {
      profile: '',
      yturl: '',
      videoID: '',
      igurl: '',
      instaID: '',
      twurl: '',
      tweetID: '',
      scurl: '',
      soundID: '',
      userid: firebase.auth().currentUser.uid,
      twusername: firebase.auth().currentUser.displayName,
      twphotourl: firebase.auth().currentUser.photoURL,
      db: firebase.firestore(),
      slash: '/',
      and: '&'
    }
  },
  validations:{
    yturl: {url},
    igurl: {url},
    twurl: {url},
    scurl: {url},
  },
  created () {
    let self = this
    var db = firebase.firestore()
    var docRef = db.collection('uid').doc(this.userid)
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data().pfcontent)
        console.log('Document data:', doc.data().yturl)
        console.log('Document data:', doc.data().igurl)
        console.log('Document data:', doc.data().twid)
        console.log('Document data:', doc.data().scid)
        console.log('Document data:', doc.data().twuserid)
        self.profile = doc.data().pfcontent
        self.videoID = doc.data().yturl
        self.instaID = doc.data().igurl
        self.tweetID = doc.data().twid
        self.soundID = doc.data().scid
      } else {
      // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
  },
  components: {
    Tweet: Tweet,
    InstagramEmbed
  },
  methods: {
    submitForm(){
      this.$v.$touch()
      if(this.$v.$invalid){
        console.log('バリデーションエラー')
      }else{
        // データ登録の処理をここに記述
        console.log('submit')
      }
    },
    signOut () {
      firebase.auth().signOut().then(()=>{
        this.$router.push('/signin')
      })
    },
    sendProfile () {
      this.db.collection('uid').doc(this.userid).set({
        pfcontent: `${this.profile}`,
      },{merge: true})
        // .then(function () {
        //   console.log('Document successfully written!')
        // })
        // .catch(function (error) {
        //   console.error('Error writing document: ', error)
        // })
    },
    getVideoID () {
      this.videoID = `https://youtube.com/embed/${this.$youtube.getIdFromURL(this.yturl)}`
      // validations = {yturl: {url}}
    },
    sendVideoID () {
      this.db.collection('uid').doc(this.userid).set({
        yturl: `${this.videoID}`
      },{merge: true})
        // .then(function () {
        //   console.log('Document successfully written!')
        // })
        // .catch(function (error) {
        //   console.error('Error writing document: ', error)
        // })
    },
    getInstaID () {
      this.instaID = this.igurl
    },
    sendInstaID () {
      this.db.collection('uid').doc(this.userid).set({
        igurl: `${this.instaID}`
      },{merge: true})
        // .then(function () {
        //   console.log('Document successfully written!')
        // })
        // .catch(function (error) {
        //   console.error('Error writing document: ', error)
        // })
    },
    getTweetID () {
      var stringer = new URL(this.twurl)
      // console.log('#1', this)
      // console.log('#2', stringer)
      // console.log('#3', stringer.pathname)
      // console.log('#4', stringer.pathname.split(this.slash))
      // console.log('#5', stringer.pathname.split(this.slash).pop())
      this.tweetID = stringer.pathname.split(this.slash).pop()
    },
    sendTweetID () {
      this.db.collection('uid').doc(this.userid).set({
        twid: `${this.tweetID}`
      },{merge: true})
        // .then(function () {
        //   console.log('Document successfully written!')
        // })
        // .catch(function (error) {
        //   console.error('Error writing document: ', error)
        // })
    },
    getSoundID () {
      var stringer = new URL(this.scurl)
    //   console.log('#1', this)
    //   console.log('#2', stringer)
    //   console.log('#3', stringer.searchParams.get('url'))
    //   console.log('#4', stringer.searchParams.get('url').split(this.slash))
    //   console.log('#5', stringer.searchParams.get('url').split(this.slash).pop())
      this.soundID = stringer.searchParams.get('url').split(this.slash).pop()
    },
    sendSoundID () {
      this.db.collection('uid').doc(this.userid).set({
        scid: `${this.soundID}`
      },{merge: true})
        // .then(function () {
        //   console.log('Document successfully written!')
        // })
        // .catch(function (error) {
        //   console.error('Error writing document: ', error)
        // })
    },
    sendAll () {
      this.db.collection('uid').doc(this.userid).set({
        pfcontent: `${this.profile}`,
        yturl: `https://youtube.com/embed/${this.videoID}`,
        twid: `${this.tweetID}`,
        scid: `${this.soundID}`
        },{merge: true})
        // .then(function () {
        //   console.log('Document successfully written!')
        // })
        // .catch(function (error) {
        //   console.error('Error writing document: ', error)
        // })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header{
  height: 50px;
}

#container{
  background-color: #dcdcdc;
}

.footer{
  background-color: #dcdcdc;
}

.title{
  text-decoration: underline;
}

.twitter-content{
  background-color:#fff;
  margin: auto;
}

.texterror{
  font-size:30px;
  color:red;
}

/* -----------------------フォローボタンのstylesheet----------------------------- */
.follow{
  text-align : right;
}

/* ボタン全体 */
.flowbtn7{
border-radius:50%;
position:relative;
display:inline-block;
width:50px;
height:50px;
font-size:30px;
color:#fff!important;
text-decoration:none;
transition:.5s;
}
/* アイコンをど真ん中に*/
.flowbtn7 i{
position:absolute;
top:50%;
left:50%;
-ms-transform:translate(-50%,-50%);
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);
}
/* ulタグの内側余白を０にする */
ul.snsbtniti{
padding:0!important;
}
/* ボタン全体の位置 */
.snsbtniti{
display:flex;
flex-flow:row wrap;
justify-content:space-around;
}

/* ボタン同士の余白 */
.snsbtniti li{
flex:0 0 33%;
text-align:center !important;
}

/* ボタンにマウスを乗せた時 */
.flowbtn7:hover{
-webkit-transform:translateY(-5px);
-ms-transform:translateY(-5px);
transform:translateY(-5px);
}

/* Twitter */
.fl_tw7{
background:linear-gradient(135deg, #13f1fc 0%,#0470dc 100%);
}

/* Facebook */
.fl_fb7{
background: linear-gradient(135deg, #6699ff 0%,#3b5998 100%);
}

/* YouTube */
.fl_yu7{
background:linear-gradient(135deg, #f5515f 0%,#c9293c 100%);
font-size:26px;
}
/* -----------------------フォローボタンのstylesheet----------------------------- */

.movie-wrap {
  position: relative;
  padding-bottom: 56.25%; /*アスペクト比 16:9の場合の縦幅*/
  height: 0;
  overflow: hidden;
}
.movie-wrap iframe {
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  border: solid 3px #000000;
}
.twitter-content{
  border: solid 3px #000000;
}
.instagram-content{
  height: 1000px;
  box-sizing: border-box;
}

.instagram-picture {
  height: 100%;
  border: solid 3px #000000;
}
.instagram-media{
  height :1000px !important;
}
.soundcloud{
  margin-top: 50px;
  padding: 30px 10px;
  background-color: #fff;
  border: solid 3px #000000;
}

.all-save{
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #fd9535;/*背景色*/
  border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
  font-size: 30px;
}

.all-save button:active{
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}

.complete{
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #00bfff;/*背景色*/
  border-bottom: solid 2px #1e90ff;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
  font-size: 30px;
}
.complete button:active{
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
</style>

<style>
.instagram-picture > iframe {
  height: 100%;
  width: 100% !important;
  /* max-width: initial !important; */
  border: solid 3px #000000;
}
</style>