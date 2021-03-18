<template>
  <section id="gallery" class="container py-8 md:py-12">
    <h2 class="text-xl text-center font-semibold py-8">Photo Gallery</h2>

    <nav class="py-4">
      <div>
        <img
          :src="photos[0]"
          class="rounded shadow mx-auto"
          style="max-height: 420px"
        />
      </div>

      <div class="flex justify-center p-2">
        <img
          v-for="photo in photos"
          :key="photo"
          :src="photo"
          class="rounded shadow m-1"
          style="max-height: 64px"
        />
      </div>
    </nav>

    <!-- <home-hero
      src="/images/heros/hero-1.jpeg"
      title="Our condusive enviroment makes learning a bliss"
    /> -->
    <!-- <home-hero
      reversed
      src="/images/heros/hero-2.jpeg"
      title="Readers are Leaders. Hence our duly stocked library."
    />
    <home-hero
      src="/images/heros/hero-3.jpeg"
      title="We hoist our flag at Extracurricular activities."
    /> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        '/images/heros/hero-1.jpeg',
        '/images/heros/hero-2.jpeg',
        '/images/heros/hero-3.jpeg',
      ],
    }
  },
}
</script>
