<template>
  <header
    class="min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover bg-center bg-accent"
    :style="`background-image: url('${currentCarousel.image}')`"
  >
    <partials-nav-bar />

    <nav
      class="flex-1 flex flex-col justify-end items-baseline lg:w-2/3 py-4 lg:py-8 mx-auto"
    >
      <div
        class="bg-secondary bg-opacity-75 px-4 py-8 md:px-12 rounded shadow w-full"
      >
        <div class="text-lg text-wide leading-relaxed">
          {{ currentCarousel.text }}
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      preloadImages: [],
      currentCarousel: {},
      carousel: [
        {
          title: 'Principal and Students 1',
          image: '/images/sliders/slide-1.jpeg',
          text:
            'We aims at preparing for the brightest future by giving unparalleled dedication and commitment to our students and their variety of needs, passions and dreams.',
        },
        {
          title: 'Trophy 1',
          image: '/images/sliders/slide-2.jpeg',
          text:
            'We won bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere et ex sit amet lobortis. Pellentesque sodales et lacus in posuere.',
        },
        {
          title: 'Principal and Students 2',
          image: '/images/sliders/slide-3.jpeg',
          text:
            'Lorem ipsum dolor sit amet, Maecenas posuere et ex sit amet lobortis. Pellentesque sodales et lacus in posuere. Suspendisse rhoncus ultrices elit sagittis viverra.',
        },
      ],
    }
  },

  created() {
    // pre-load carousel/slider images
    this.carousel.forEach((element) => {
      const x = new Image(0, 0)
      x.src = element.image
    })

    // Set Interval for slide change
    let i = 0
    const interval = 10000

    setInterval(() => {
      this.currentCarousel = this.carousel[i]
      i >= this.carousel.length - 1 ? (i = 0) : i++
    }, interval)
  },
}
</script>

<style>
/* 
HeaderSample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
