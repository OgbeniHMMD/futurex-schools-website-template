<template>
  <main>
    <partials-header />
    <home-departments />
    <home-about-school />

    <section class="container py-12">
      <h2 class="text-xl text-center font-bold font-bolder pb-8">
        Sample Hero 1
      </h2>

      <div class="lg:flex justify-between py-8">
        <div class="lg:w-1/2 text-secondary">
          <i class="far fa-comments fa-10x" />
        </div>

        <div class="lg:w-1/2">
          Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH
          SCHOOL provides unparalleled dedication and commitment to students and
          their variety of needs, passions and dreams. Explore our website to
          learn more about us.
        </div>
      </div>
    </section>

    <div class="bg-secondary text-gray-700 my-8">
      <div
        class="container md:2/3 lg:w-3/5 text-lg leading-relaxed font-medium py-12 md:py-20"
      >
        Iwerekun Community Senior High School is a state owned co-educational
        secondary school. The school was founded in 1982 by the Lagos State
        Government during the administration of Late Alh. Lateef Kayode Jakande.
        The school has over the years grown from an initial population of about
        fifty students to about one thousand seven hundred and fifty to about a
        staff strength of thirty five.
      </div>
    </div>

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

    <section class="container py-12">
      <div class="lg:flex justify-between py-8">
        <div class="lg:w-1/2 text-secondary">
          <i class="far fa-comments fa-10x" />
        </div>

        <div class="lg:w-1/2">
          Preparing for the brightest future, IWEREKUN COMMUNITY SENIOR HIGH
          SCHOOL provides unparalleled dedication and commitment to students and
          their variety of needs, passions and dreams. Explore our website to
          learn more about us.
        </div>
      </div>
    </section>

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
