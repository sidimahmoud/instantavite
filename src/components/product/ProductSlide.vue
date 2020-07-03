<template>
    <div>
        <img :src="item.thumbnail_url" height="100">
    
        <router-link :to="'/product/' + item.id" tag="h5" style="width: 300px;"><a>{{ item.title }}</a></router-link>
        

        <!--<p class="card-text truncate">{{ item.description | shortDescription}}</p>-->
        <p>${{ item.price }}</p>
        <p>
            <button class="btn btn-danger pull-center" :disabled="item.quantity === 0" @click="addItem">
                Add to cart
            </button>
        </p>
 <!--<div>
    <div>
      
    </div>
    <div>
      <router-link :to="'/product/' + item.id" tag="h5" class="card-title"><a>{{ item.title }}</a></router-link>
      <h6 class="card-subtitle mb-2 remain">{{ item.quantity }} left in stock</h6>

      <p class="card-text truncate">{{ item.description | shortDescription}}</p>

      <div class="row">
        
      </div>
    </div>
  </div>-->
</div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  props: ['item', 'displayList'],
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.card {
  height: 50%;
  width: 100%;
}

.card-text {
  font-size: 0.875rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

.list-group-item {
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  border: 0;
  .thumbnail {
    display: inline-block;
    width: 100%;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }

  .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }
}




.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item:after {
  clear: both;
}
</style>
