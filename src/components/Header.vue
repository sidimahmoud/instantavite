<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-light text-dark" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <router-link to="/" class="navbar-brand mr-auto"><img src="@/assets/img/app-logo.png" alt="app-logo" width="100" height="50"></router-link>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTop"
        aria-controls="navbarTop"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="search-item">
      <el-input size="mini" placeholder="Chercher un produit par nom">
        <span class="el-icon-search el-input__icon app-cursor-pointer" slot="suffix"></span>
      </el-input>
    </div>  

    <div class="collapse navbar-collapse" id="navbarTop" :class="{show: isNavOpen}">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="nav navbar-nav">
        <li>
          <router-link to="/cart" class="nav-item">
            Catégorie des produits
          </router-link>
        </li>
        <li>
          <router-link to="/login" class="nav-item">
            <div><i class="fas fa-user"></i>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/cart" class="nav-item">
            <i class="fas fa-shopping-cart"></i><el-badge :value="numItems"></el-badge><span class="badge badge-light">$ {{ cartValue }}</span>
          </router-link>
        </li>
        
        <li v-if="isLoggedIn" class="li-pointer nav-item">
          <a @click="logout" class="nav-item">Logout {{ userEmail }}</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- /.container -->
</nav>
</template>

<script>
import {
  mapActions, mapGetters
} from 'vuex';
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'cartValue', 'currentUser', 'cartItemList']),
    numItems() {
      return this.cartItemList.reduce((total, item) => {
        total += item.quantity;
        return total
      }, 0);
    },
    userEmail() {
      return this.isLoggedIn ? this.currentUser.email : ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>


<style scoped lange="sass">
.navbar-btn a {
  color: white;
}

.li-pointer {
  cursor: pointer;
}

.li-pointer:hover {
  cursor: pointer;
}
li{
  margin-left: 10px;
}
</style>
