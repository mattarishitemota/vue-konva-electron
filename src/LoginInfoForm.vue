<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Teamsのログイン情報</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field label="メールアドレス">
          <b-input
            type="email"
            v-model="email"
            placeholder="Your email"
            required
          >
          </b-input>
        </b-field>

        <b-field label="パスワード">
          <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
            required
          >
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button label="キャンセル" @click="$emit('close')" />
        <b-button label="ログイン" type="is-primary" @click="submit" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    submit() {
      this.$emit('submit', {
        email: this.email,
        password: this.password
      })
    }
  }
};
</script>

<style>
</style>