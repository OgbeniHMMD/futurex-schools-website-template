<template>
  <section id="contact" class="container py-8">
    <nav
      class="md:w-2/3 bg-gradient-to-r from-accent to-white rounded shadow-md mx-auto"
    >
      <nav
        class="flex justify-evenly bg-right bg-no-repeat bg-contain text-primary"
      >
        <div class="flex justify-between items-center w-full p-12">
          <div class="flex flex-column items-center h-full">
            <div>
              <h2 class="text-xl font-bold font-bolder pb-8">Contact Us!</h2>

              <div
                v-for="info in contactInfo"
                :key="info.title"
                class="font-medium pb-4"
              >
                <i class="fas mr-4" :class="info.icon" /> {{ info.address }}
              </div>
            </div>
          </div>

          <div class="text-secondary">
            <i class="far fa-comments fa-10x invisible lg:visible" />
          </div>
        </div>
      </nav>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactInfo: [
        {
          title: 'Phone',
          icon: 'fa-phone',
          address: this.$config.schoolTelephone,
        },
        {
          title: 'E-mail',
          icon: 'fa-envelope',
          address: this.$config.schoolEmail,
        },
        {
          title: 'Address',
          icon: 'fa-map-marker',
          address: this.$config.schoolLocation,
        },
      ],
    }
  },
}
</script>
