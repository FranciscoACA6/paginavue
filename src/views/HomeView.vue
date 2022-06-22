<template>

  <v-parallax height="600" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-container>
          <v-row justify="space-around">
            <v-contain>
              <v-img
                src="https://tienda.movistar.com.mx/media/catalog/product/cache/087d8656b93b378449aad7de37c3d04e/m/o/moto_g60s_azul.png">
              </v-img>
            </v-contain>

          </v-row>

        </v-container>

        <h1 class="text-h4 font-weight-thin mb-4">
          COMPRA NUESTRO PRODUCTO
        </h1>
        <h4 class="subheading">
          SOLO POR HOY!!!
        </h4>
        <v-col class="centar" cols="12">
          <router-link to="/Registro">
            <v-btn dark color="#0277BD">
              <v-icon dark class="mr-2">
                mdi-arrow-right-drop-circle
              </v-icon>
              Comprar!!
            </v-btn>
          </router-link>
        </v-col>
      </v-col>
    </v-row>
  </v-parallax>
</template>


<script>

export default {
  components: {

  }
}


</script>

<style>
</style>
