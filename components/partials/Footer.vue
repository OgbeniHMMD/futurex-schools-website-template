<template>
  <footer>
    <nav class="text-gray-800 py-12">
      <div class="container flex flex-wrap justify-around item-center">
        <nav
          class="min-w-full md:min-w-0 md:max-w-1/4 text-primary order-1 md:order-2 pb-8 md:pb-0"
        >
          <h4 class="text-center text-lg tracking-wide font-bold pb-4">
            Quick Links
          </h4>
          <nuxt-link
            v-for="link in quickLinks"
            :key="link.slug"
            :to="link.slug"
            class="block px-6 py-2 my-2 font-medium bg-accent rounded-full"
            ><i class="fas mr-4" :class="link.icon" />
            {{ link.title }}</nuxt-link
          >
        </nav>

        <nav class="order-2 md:order-1 pb-8 md:pb-0">
          <img
            :src="$config.schoolLogo"
            alt="logo"
            class="mx-auto"
            width="240"
          />
        </nav>

        <nav class="order-3">
          <img
            src="/images/lagos-logo.svg"
            alt="logo"
            class="mx-auto"
            width="240"
          />
        </nav>
      </div>
    </nav>

    <nav class="container text-center text-gray-800 py-12">
      <div class="text-xl text-primary pb-4">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :href="link.href"
          :title="link.title"
          class="p-2 mx-2 rounded"
        >
          <i class="fab" :class="link.icon" />
        </a>
      </div>

      <div class="">
        &copy; {{ $config.schoolName }}, 2021. Powered by
        <a
          href="https://test.futurexeducation.com"
          class="font-bold text-primary"
          >Future-X</a
        >
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      quickLinks: [
        { title: 'Home', slug: '/#home', icon: 'fa-home' },
        { title: 'About Us', slug: '/#about', icon: 'fa-info-circle' },
        { title: 'Our Staff', slug: '/#staff', icon: 'fa-users' },
        { title: 'Gallery', slug: '/#gallery', icon: 'fa-photo-video' },
      ],
      socialLinks: [
        {
          title: 'Facebook',
          icon: 'fa-facebook',
          href: this.$config.schoolFacebook,
        },
        {
          title: 'Twitter',
          icon: 'fa-twitter',
          href: this.$config.schoolTwitter,
        },
        {
          title: 'Instagram',
          icon: 'fa-instagram',
          href: this.$config.schoolInstagram,
        },
        {
          title: 'Youtube',
          icon: 'fa-youtube',
          href: this.$config.schoolYoutube,
        },
      ],
    }
  },
}
</script>
