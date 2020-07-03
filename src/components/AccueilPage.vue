<template>
  <div class="container-fluid">
    <h4>Fruits</h4>
    <hooper :settings="hooperSettings" style="height: 250px;">
      <slide style="padding:10px;" v-for="prod in products" v-bind:key="prod.id">
        <app-product-item :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

    <el-divider></el-divider>

    <h4>Légumes</h4>
    <hooper :settings="hooperSettings" style="height: 250px;">
      <slide style="padding:10px;" v-for="prod in legumeProducts" v-bind:key="prod.id">
        <app-product-item :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

    <el-divider></el-divider>
    
    <h4>Prêt à manger</h4>
    <hooper :settings="hooperSettings" style="height: 250px;">
      <slide style="padding:10px;" v-for="prod in products" v-bind:key="prod.id">
        <app-product-item :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
      </slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div><!-- /.container -->
</template>

<script>
import { 
  Hooper, 
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';
import ProductItem from './product/ProductSlide.vue';
import 'hooper/dist/hooper.css';
import {mapGetters} from 'vuex';
//import {mapActions, mapGetters} from 'vuex';

export default {
  /*
  |--------------------------------------------------------------------------
  | Component > components
  |--------------------------------------------------------------------------
  */
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    appProductItem: ProductItem,
  },
  /*
  |--------------------------------------------------------------------------
  | Component > data
  |--------------------------------------------------------------------------
  */
  data() {
    return {
      hooperSettings: {
        itemsToShow: 4,
        infiniteScroll: true
      }
    };
  },
  /*
  |--------------------------------------------------------------------------
  | Component > computed
  |--------------------------------------------------------------------------
  */
  computed: {
    ...mapGetters(['products', 'isProductLoading','legumeProducts']),
  },
  /*
  |--------------------------------------------------------------------------
  | Component > methods
  |--------------------------------------------------------------------------
  */
  methods: {
  }
}
</script>
