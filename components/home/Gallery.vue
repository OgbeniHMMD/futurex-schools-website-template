<template>
  <section id="gallery" class="container py-8 md:py-12">
    <h2 class="text-xl text-center font-semibold py-8">Photo Gallery</h2>

    <nav class="py-4">
      <div>
        <img
          :src="photos[currentPhoto]"
          class="rounded shadow mx-auto"
          style="max-height: 420px"
        />
      </div>

      <div class="flex flex-wrap justify-center p-2">
        <img
          v-for="(photo, i) in photos"
          :key="photo"
          :src="photo"
          class="rounded hover:shadow-md cursor-pointer m-1"
          style="max-width: 64px"
          @click="changePhoto(i)"
        />
      </div>
    </nav>

    <!-- <home-hero
      reversed
      src="/images/heros/hero-1.jpeg"
      title="Our condusive enviroment makes learning a bliss"
    /> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentPhoto: 0,
      photos: [
        // prefered photo size is 1008px X 490px

        '/images/gallery/hero-1.jpeg',
        '/images/gallery/hero-2.jpeg',
        '/images/gallery/hero-3.jpeg',
      ],
    }
  },

  methods: {
    changePhoto(i) {
      this.currentPhoto = i
    },
  },
}
</script>
