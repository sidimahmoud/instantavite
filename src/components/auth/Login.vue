<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-1">
      <form id="login-form" role="form" style="display: block;" @submit.prevent="onSubmit">
        <h3 class="text-center">Login</h3>
        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email Address"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-success" style="width: 100%" :disabled="isLoading">
            <i v-if="isLoading" class="fa fa-spinner fa-spin" />
            Log in
          </button>
        </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <router-link to="/register">
                  <a>Register</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <el-divider>OU</el-divider>
          <button class="button-fcb"> Login with Facebook</button><br>
          <button class="button-google"> Login with Google</button>
        </div>  
      </form>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['addMessage', 'clearMessage', 'loginWithEmail']),
    onSubmit() {
      this.isLoading = true
      let data = {
        email: this.email,
        password: this.password
      }
      this.loginWithEmail(data).then(() => {
        this.clearMessage();
        this.$router.push({
          name: 'mainpage'
        });
      }).catch((error) => {
        let message_obj = {
          message: error.message,
          messageClass: "danger",
          autoClose: true
        }
        this.addMessage(message_obj);
      }).then(() => {
        this.isLoading = false
      })
    }
  }
}
</script>
<style>
.button-fcb{
  color:white;
  width: 100%;
  min-width: 250px;
  background-color: blue;
  height: 2.5rem;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 5px;
}
.button-google{
  color:red;
  width: 100%;
  min-width: 250px;
  background-color: white;
  height: 2.5rem;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: 5px;
}
</style>
