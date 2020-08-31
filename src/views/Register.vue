<template>
  <form class="card auth-card" @submit.prevent="onSubmitHandler">
    <div class="card-content">
      <span class="card-title">Home Budget</span>
      <div class="input-field">
        <input
                id="email"
                type="text"
                v-model.trim="email"
                :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.dirty || !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Email should not be empty value</small>
        <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">Please enter valid email</small>
      </div>
      <div class="input-field">
        <input
                id="password"
                type="password"
                class="validate"
                v-model.trim="password"
                :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.dirty || !$v.password.minLength)}"
        >
        <label for="password">Password</label>
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">Enter Email</small>
        <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">Password should
          contain at least {{$v.password.$params.minLength.min}} charsets</small>
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="name">Name</label>
        <small class="helper-text invalid"  v-if="$v.name.$dirty && !$v.name.required">Enter your Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>Agreement</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Register
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">login!</router-link>
      </p>
    </div>
  </form>
</template>
<script>
  import {email, minLength, required} from "vuelidate/lib/validators";

  export default {
   name: 'Register',
    data: () => ({
      email: {},
      password: {},
      name: '',
      agree: false,
    }),
    validations: {
      email: {email, required},
      password: {required, minLength: minLength(6)},
      name: {required},
      agree: {checked: v => v}
    },
    methods: {
    async  onSubmitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }

        const formData = {
          email: this.email,
          password: this.password,
          name: this.name
        };

        try {
          await this.$store.dispatch('register', formData);
          await this.$router.push('/');
        }catch (e) {
          console.log(e);
        }
      }
    }
 }
</script>
