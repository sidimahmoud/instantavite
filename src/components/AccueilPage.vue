<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Fruits et Légumes</template>
            <el-menu-item-group>
              <template slot="title">Fruits</template>
              <el-menu-item index="1-1">sec</el-menu-item>
              <el-menu-item index="1-2">boites</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Légumes">
              <el-menu-item index="1-3">légumes</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">légumes boites</template>
              <el-menu-item index="1-4-1"></el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Prêt à manger</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>Boisson</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>Electronique</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="far fa-futbol"></i> Sport</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        
    </el-aside>
    <el-container>
      <el-main>
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
      </el-main>
      </el-container>
    </el-container>
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
        itemsToShow: 5,
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
