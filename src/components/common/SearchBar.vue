<template>
    <div class="container-fluid bg-light text-dark">
        <div class="search-item">
            <el-input placeholder="Chercher un produit par nom" v-model="product">
            <span class="el-icon-search el-input__icon app-cursor-pointer" slot="suffix" ></span>
            </el-input>
        </div>
    </div>
  <!-- /.container -->
</template>

<script>
export default {
  data() {
    return {
      product:'',
    }
  },

}
</script>

