<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <sub-header></sub-header>
      <search-bar></search-bar>
      <message-component></message-component>
      <div class="container-fluid mt-3">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
              <div class="card panel-warning d-none d-sm-flex" id="reset-store-panel">
                <!--chat goes here-->
                
              </div>
            </div>
          </div>
      </div>
    </main>

    <footer class="navbar-default navbar-bottom navbar-dark bg-dark text-white" style="height:60px">
      <app-footer></app-footer>
    </footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import MessageComponent from './components/common/MessageComponent.vue';
  import SubHeader from './components/common/SubHeader.vue';
  import SearchBar from './components/common/SearchBar.vue';
  
  export default {
    components: {
      appHeader: Header,
      MessageComponent,
      appFooter: Footer,
      SubHeader,
      SearchBar
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      //let uid = this.$store.getters.currentUser.uid;
      //this.listenToProductList();
      //this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
  }
</script>

<style>
  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
