<template>
  <footer>
    <nav class="container py-8">
      <nav
        class="lg:w-2/3 bg-gradient-to-r from-accent to-white rounded lg:rounded-2xl shadow-md mx-auto"
      >
        <nav
          class="flex justify-evenly bg-right bg-no-repeat bg-contain text-primary"
          style="background-image: url('/images/contact-us.svg')"
        >
          <div class="w-full p-12">
            <div class="flex flex-column items-center h-full">
              <div>
                <h1 class="text-2xl font-bold font-serif pb-8">Contact Us!</h1>
                <div class="text-xl font-medium font-mono pb-3">
                  {{ $config.schoolEmail }}
                </div>
                <div class="text-xl font-medium font-mono">
                  {{ $config.schoolTelephone }}
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/contact-us.svg"
                style="height: 75px"
                class="invisible"
              />
            </div>
          </div>
        </nav>
      </nav>
    </nav>

    <nav class="text-gray-800 py-12">
      <div class="container flex justify-around item-center">
        <nav class="fl ex-1">
          <img
            :src="$config.schoolLogo"
            alt="logo"
            class="mx-auto"
            width="240"
          />
        </nav>

        <nav class="flex-0 text-primary">
          <h4
            class="text-center text-lg tracking-wide font-serif font-bold pb-4"
          >
            Quick Links
          </h4>
          <nuxt-link
            v-for="link in quickLinks"
            :key="link.slug"
            :to="link.slug"
            class="block px-6 py-2 my-2 bg-accent rounded-full shadow-sm hover:shadow"
            ><i class="fas mr-4" :class="link.icon" />
            {{ link.title }}</nuxt-link
          >
        </nav>

        <nav class="flex--1">
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
      <div class="text-center text-primary pb-4">
        <nuxt-link
          v-for="link in socialLinks"
          :key="link.slug"
          :to="link.slug"
          :title="link.title"
          class="p-2 mx-2 rounded"
        >
          <i class="fab" :class="link.icon" />
        </nuxt-link>
      </div>

      &copy; {{ $config.schoolName }}, 2021. Powered by
      <a href="https://test.futurexeducation.com" class="font-bold">Future-X</a>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      quickLinks: [
        { title: 'Home', slug: '/', icon: 'fa-home' },
        { title: 'About Us', slug: '/about/', icon: 'fa-info-circle' },
        { title: 'Our Staff', slug: '/staff/', icon: 'fa-users' },
        { title: 'Gallery', slug: '/gallery/', icon: 'fa-photo-video' },
      ],
      socialLinks: [
        { title: 'Facebook', slug: '#facebook-link', icon: 'fa-facebook' },
        { title: 'Twitter', slug: '#twitter-link', icon: 'fa-twitter' },
        { title: 'Instagram', slug: '#Instagram-link', icon: 'fa-instagram' },
        { title: 'Youtube', slug: '#youtube-link', icon: 'fa-youtube' },
      ],
    }
  },
}
</script>
