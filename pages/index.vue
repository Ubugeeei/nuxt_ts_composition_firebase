<template>
  <div>
    <h1>Nuxt.js(CompositionAPI)+TypeScriptでFirebaseと連携したい！</h1>
    <h2>↓googleでログイン↓</h2>
    <button @click="googleLogin">ログイン</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api" //coompositionを使えるように

export default defineComponent({
  setup(_, { root }) {
    /**
     * ログイン機能
     */
    const googleLogin = async () => {
      try {
        const provider = new root.$fireModule.auth.GoogleAuthProvider()
        root.$fire.auth.signInWithRedirect(provider)
      } catch (e) {
        console.error(e)
      }
    }

    return { googleLogin }
  }
})
</script>
