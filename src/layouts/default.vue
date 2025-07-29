<template>
  <authenticator>
    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-4 d-flex flex-column align-center">
        <v-avatar class="mb-4" color="grey-darken-1" size="150"></v-avatar>
      </v-sheet>

      <v-divider />

      <v-list class="pt-0">
        <v-list-item
          v-for="[icon, text, path] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          :to="path"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>AdvoManager</v-app-bar-title>
      <v-btn @click="toggleTheme">Toggle theme</v-btn>
      <v-btn @click="auth.signOut">Deslogar</v-btn>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-sheet color="surface" rounded="lg" height="80vh" border elevation="2">
          <router-view />
        </v-sheet>
      </v-container>
    </v-main>
  </authenticator>
</template>

<script setup>
  import { useAuthenticator } from '@aws-amplify/ui-vue'
  import { useTheme } from 'vuetify'
  import { ref } from 'vue'

  const theme = useTheme()
  const drawer = ref(null)
  const auth = useAuthenticator()

  const toggleTheme = () => {
    theme.cycle()
    document.documentElement.classList.toggle('amplify-dark-theme')
  }

  const links = [
    ['mdi-home', 'Home', '/'],
    ['mdi-cog', 'Settings', '/settings'],
  ]
</script>
