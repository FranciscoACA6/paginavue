<template>
  <v-app>
    <div>
      <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon @click="drawer = !drawer" large></v-app-bar-nav-icon>

        <v-toolbar-title >
          <router-link to="/">
            <v-icon large>mdi-cellphone</v-icon>
            Tienda motorola
          </router-link>
        </v-toolbar-title>
        
        <v-spacer></v-spacer>
        <router-link to="/Carrito">
          <v-btn icon >
            <v-icon left large>mdi-cart</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar>

    </div>

    <v-navigation-drawer app v-model="drawer" temporary dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon large>mdi-account-circle</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Usuario
            </v-list-item-title>
            <v-list-item-subtitle>Iniciar sesión/registrarse</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list dense nav>

        <v-list-item v-for="item in items" :key="item.tittle" link>

          <router-link to="/">
            <v-icon class="mr-3">{{ item.icon1 }}</v-icon>{{ item.tittle1 }}
          </router-link>

          <router-link to="Carrito">
            <v-icon class="mr-3">{{ item.icon2 }}</v-icon>{{ item.tittle2 }}
          </router-link>

          <router-link to="/Registro">
            <v-icon class="mr-3">{{ item.icon3 }}</v-icon>{{ item.tittle3 }}
          </router-link>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'MenuPrincipal',

  data: () => ({
    drawer: true,
    items: [
      { tittle1: 'Inicio', icon1: 'mdi-home' },
      { tittle2: 'Carrito', icon2: 'mdi-cart' },
      { tittle3: 'Registro', icon3: 'mdi-account-box' }

    ]
  }),
  components: {

  }
};
</script>

<style >
</style>