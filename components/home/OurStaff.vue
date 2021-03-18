<template>
  <section id="staff" class="border-t border-b border-secondary">
    <div class="container py-12">
      <!-- <home-hero
      src="/images/heros/hero-1.jpeg"
      title="Our condusive enviroment makes learning a bliss"
    />
    <home-hero
      reversed
      src="/images/heros/hero-2.jpeg"
      title="Readers are Leaders. Hence our duly stocked library."
    />
    <home-hero
      src="/images/heros/hero-3.jpeg"
      title="We hoist our flag at Extracurricular activities."
    /> -->

      <h2 class="text-xl text-center font-semibold py-8">Meet Our Staff</h2>

      <div class="flex justify-evenly py-8">
        <div
          v-for="item in staff"
          :key="item.name"
          class="flex-1 font-semibold text-primary text-center"
        >
          <span class="rounded-full border border-primary">
            <i
              :class="item.avatar"
              class="fas fa-7x rounded-full border border-primary"
          /></span>
          <div class="pt-4 text-lg">{{ item.name }}</div>
          <div class="pt-2 text-black">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      staff: [
        {
          title: 'Vice Principal (Academics)',
          name: 'Mr Omomo',
          avatar: 'fa-chart-line',
        },
        {
          title: 'Principal',
          name: 'Mrs. Adenike Fashola',
          avatar: 'fa-landmark',
        },
        {
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          avatar: 'fa-microscope',
        },
      ],
    }
  },
}
</script>
