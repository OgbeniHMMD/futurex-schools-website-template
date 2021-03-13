<template>
  <footer>
    <nav class="container py-8">
      <nav
        class="lg:w-2/3 bg-gradient-to-r from-accent to-white rounded lg:rounded-2xl shadow-md mx-auto"
      >
        <nav
          class="flex justify-between bg-right bg-no-repeat bg-contain text-primary"
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
      <div class="container flex justify-center items-center">
        <nav class="flex-1">
          <img
            :src="$config.schoolLogo"
            alt="logo"
            class="mx-auto"
            width="240"
          />
        </nav>

        <nav class="flex-1 pa-2">
          <div class="text-center text-primary">
            <h4 class="text-xl font-serif font-bold pb-4">Quick Links</h4>
            <nuxt-link
              v-for="quickLink in quickLinks"
              :key="quickLink.slug"
              :to="quickLink.slug"
              class="block py-1 hover:bg-accent rounded-full"
              v-text="quickLink.title"
            />
          </div>
        </nav>

        <nav class="flex-1">
          <img
            src="/images/lagos-logo.svg"
            alt="logo"
            class="mx-auto"
            width="240"
          />
        </nav>
      </div>
    </nav>

    <nav class="container text-center text-gray-700 py-12">
      <div>&copy; {{ $config.schoolName }}, 2021. All Rights Reserved</div>
      <div class="pt-4 font-medium">
        Powered by
        <a href="https://test.futurexeducation.com" class="font-bold"
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
        { title: 'Home', slug: '/' },
        { title: 'About', slug: '/about/' },
        { title: 'Staff', slug: '/staff/' },
        { title: 'Gallery', slug: '/gallery/' },
      ],
    }
  },
}
</script>
