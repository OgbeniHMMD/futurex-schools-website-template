<template>
  <main>
    <header
      class="min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover"
      style="background-image: url('/images/sliders/slider-1.jpeg')"
    >
      <partials-header />

      <nav
        class="flex-1 container flex justify-center items-center text-center mx-auto"
      >
        <div>
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="button--green"
            >
              Documentation
            </a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
              class="button--grey"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>

    <div
      class="container bg-gray-100 text-gray-700 p-10 my-8 rounded-2xl shadow-sm"
    >
      Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH SCHOOL
      provides unparalleled dedication and commitment to students and their
      variety of needs, passions and dreams. Explore our website to learn more
      about us.
    </div>

    <partials-footer />
  </main>
</template>

<script>
export default {}
</script>

<style>
/* 
HeaderSample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
