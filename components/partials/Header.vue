<template>
  <header
    class="min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover"
    :style="`background-image: url('${currentCarousel.image}')`"
  >
    <partials-nav-bar />

    <nav
      class="flex-1 flex flex-col justify-end items-baseline mx-auto lg:w-2/3 py-4 shadow"
    >
      <div class="bg-white bg-opacity-75 p-8 rounded shadow">
        <div class="text-xl">
          {{ currentCarousel.text }}
        </div>

        <div class="pt-8">
          <a
            href="#about"
            class="text-white bg-primary text-center text-bold px-8 py-3 rounded mr-2 hover:bg-accent hover:text-primary border border-primary"
          >
            Learn More
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentCarousel: {},
      carousel: [
        {
          title: 'Principal and Students 1',
          image: '/images/sliders/slide-1.jpeg',
          text:
            'We aims at preparing for the brightest future by giving unparalleled dedication and commitment to our students and their variety of needs, passions and dreams.',
        },
        {
          title: 'Throupy 1',
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

  mounted() {
    const interval = 3000
    let i = 0
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
