<template>
  <header class="flex justify-between items-center py-1">
    <div class="container flex justify-between items-center">
      <nav
        class="flex-1 flex justify-around bg-white bg-opacity-75 py-1 font-bold rounded-full shadow"
      >
        <nuxt-link
          v-for="link in JumpLinks"
          :key="link.title"
          :to="link.slug"
          class="text-primary px-6 py-2 rounded-full mr-2 hover:bg-accent"
          v-text="link.title"
        />
      </nav>

      <nuxt-link
        class="border border-primary rounded-full bg-white p-2 mx-4"
        to="/"
      >
        <img :src="$config.schoolLogo" alt="logo" class="mx-auto" width="120" />
      </nuxt-link>

      <nav
        class="flex-1 flex justify-around bg-white bg-opacity-75 py-1 font-bold rounded-full shadow"
      >
        <nuxt-link
          v-for="link in anchorLinks"
          :key="link.title"
          :to="link.slug"
          class="text-primary text-center px-6 py-2 rounded-full mr-2 hover:bg-accent"
          v-text="link.title"
        />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      JumpLinks: [
        { title: 'Departments', slug: '/#departments' },
        { title: 'Mission & Vision', slug: '/#mission-vision' },
        { title: 'Contact', slug: '/#contact' },
      ],
      anchorLinks: [
        { title: 'About', slug: '/about/' },
        { title: 'Staff', slug: '/staff/' },
        { title: 'Gallery', slug: '/gallery/' },
      ],
    }
  },
}
</script>
