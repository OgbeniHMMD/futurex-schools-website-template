<template>
  <main>
    <partials-header />

    <section class="container py-12">
      <h2 class="text-xl text-center font-bold font-bolder pb-8">
        Sample Hero 1
      </h2>

      <div class="lg:flex justify-between py-8">
        <div class="lg:w-1/2 text-secondary">
          <i class="far fa-comments fa-10x invisible lg:visible" />
        </div>

        <div class="lg:w-1/2">
          Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH
          SCHOOL provides unparalleled dedication and commitment to students and
          their variety of needs, passions and dreams. Explore our website to
          learn more about us.
        </div>
      </div>
    </section>

    <section class="container py-12">
      <h2 class="text-xl text-center font-bold font-bolder pb-8">
        Sample Hero 2
      </h2>

      <div class="lg:flex justify-between py-8">
        <div class="lg:w-1/2">
          Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH
          SCHOOL provides unparalleled dedication and commitment to students and
          their variety of needs, passions and dreams. Explore our website to
          learn more about us.
        </div>

        <div class="lg:w-1/2 text-secondary">
          <i class="far fa-comments fa-10x invisible lg:visible" />
        </div>
      </div>
    </section>

    <div
      class="container bg-gray-100 text-gray-700 p-10 my-8 rounded-2xl shadow-sm"
    >
      Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH SCHOOL
      provides unparalleled dedication and commitment to students and their
      variety of needs, passions and dreams. Explore our website to learn more
      about us.
    </div>

    <home-contact-card />
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
</style>
