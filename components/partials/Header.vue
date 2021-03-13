<template>
  <header class="borde r-b bg-transparent py-2">
    <div class="container flex justify-between items-center">
      <div>
        <nuxt-link
          v-for="i in 3"
          :key="i"
          to="#menu"
          class="text-primary px-4 py-2 rounded-full mr-2 hover:bg-accent"
          >#MENU {{ i }}</nuxt-link
        >
      </div>

      <nuxt-link class="h4" to="/">
        <img :src="$config.schoolLogo" alt="logo" class="mx-auto" width="100" />
      </nuxt-link>

      <div>
        <nuxt-link
          v-for="i in 3"
          :key="i"
          to="#menu"
          class="text-primary px-4 py-2 rounded-full mr-2 hover:bg-accent"
          >/MENU {{ i }}</nuxt-link
        >
      </div>
    </div>
  </header>
</template>
