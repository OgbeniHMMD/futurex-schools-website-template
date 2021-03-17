<template>
  <header id="home" class="container flex justify-around items-center py-1">
    <nav
      class="hidden md:flex flex-1 justify-around bg-white py-1 font-bold rounded-full shadow"
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
      class="hidden md:flex flex-1 justify-around bg-white py-1 font-bold rounded-full shadow"
    >
      <nuxt-link
        v-for="link in anchorLinks"
        :key="link.title"
        :to="link.slug"
        class="text-primary text-center px-6 py-2 rounded-full mr-2 hover:bg-accent"
        v-text="link.title"
      />
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      JumpLinks: [
        { title: 'Departments', slug: '/#departments' },
        { title: 'Contact', slug: '/#contact' },
      ],
      anchorLinks: [
        { title: 'About', slug: '/#about' },
        { title: 'Staff', slug: '/#staff' },
        { title: 'Gallery', slug: '/#gallery' },
      ],
    }
  },
}
</script>
