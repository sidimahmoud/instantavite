<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-light text-dark" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <router-link to="/" class="navbar-brand mr-auto"><img src="@/assets/img/app-logo.png" alt="app-logo" width="150" height="70"></router-link>
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
      <el-input placeholder="Chercher un produit par nom" v-model="product">
        <span class="el-icon-search el-input__icon app-cursor-pointer" slot="suffix" ></span>
      </el-input>
    </div>  

    <div class="collapse navbar-collapse" id="navbarTop" :class="{show: isNavOpen}">
      <ul class="navbar-nav mr-auto">

      </ul>
      <ul class="nav navbar-nav">
        <li>
          <router-link to="/apropos" class="nav-item">
            <el-button size="meduim">A propos</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-item">
            
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                <el-button size="meduim">Autres Produits<i class="el-icon-arrow-down el-icon--right"></i></el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Article de dépaneur</el-dropdown-item>
                <el-dropdown-item>Article de moins de 5$</el-dropdown-item>
                <el-dropdown-item>Sport</el-dropdown-item>
                <el-dropdown-item>Electroniques</el-dropdown-item>
                <el-dropdown-item divided>Quincaillerie</el-dropdown-item>
                <el-dropdown-item divided>Mode</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </router-link>
        </li>
        <li>
          <router-link to="/other-products" class="nav-item">
            <el-button size="meduim">Vous ne trouvez pas ce que vous chercher?</el-button>
          </router-link>
        </li>
        <li>
          <router-link to="/login" class="nav-item">
            <div>  
              <el-button>
                <span ><i class="fas fa-user"></i></span><br>
              </el-button>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/cart" class="nav-item">
            <el-button size="small">
              <i class="fas fa-shopping-cart"></i><el-badge :value="numItems"></el-badge><span class="badge badge-light">$ {{ cartValue }}</span>
            </el-button>
          </router-link>
        </li>
        <li>
          <el-select v-model="language" style="width: 62px">
            <el-option label="FR" value="fr" />
            <el-option label="EN" value="en" />
          </el-select>
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
      isNavOpen: false,
      product:'',
      language: 'fr'
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
  margin-left: 5px;
}
</style>
