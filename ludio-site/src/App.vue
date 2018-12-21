<template>
  <div id="app">
        <siteNav></siteNav>
        <b-container class="bv-example-row">
          <b-row class="justify-content-md-center">
            <b-col cols="12" md="auto">
              <router-view></router-view>
          </b-col>
          </b-row>
        </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import '/Users/harrydifolco/ludio/ludio-site/static/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'


import siteNav from './components/siteNav'

export default {
  name: 'app',
  components: {
    'siteNav': siteNav,
  }
}
</script>


<style>
</style>
