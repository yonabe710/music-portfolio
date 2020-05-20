<template>
    <header class="header">
      <b-navbar class = "notification is-primary">
        <template slot="start">
          <b-navbar-item href="https://twitter.com/">
            <img class="thumbnail" :src= this.twphotoUrl>
            <h2 class="userid">{{this.twusername}}</h2>
          </b-navbar-item>
          <b-navbar-item href="#">
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
          </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link to="/mypage" class="button is-primary">
                      <strong>Mypage</strong>
                    </router-link>
                    <router-link to="/signin" class="button is-light">
                      <strong>Sign in</strong>
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
    </header>