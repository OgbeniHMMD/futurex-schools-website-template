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

      <div class="md:flex justify-center items-center p-8">
        <div
          v-for="item in staff"
          :key="item.id"
          class="flex-1 font-semibold text-primary text-center p-4 md:pb-0"
          :class="'order-' + item.id"
        >
          <img
            :src="item.src"
            alt="staff"
            :width="item.id == 2 ? '320' : '250'"
            class="rounded-full border border-primary mx-auto hover:shadow-lg"
          />
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
          id: 2,
          title: 'Principal',
          name: 'Mrs. Adenike Fashola',
          src: '/images/staff/staff-3.jpg',
        },
        {
          id: 1,
          title: 'Vice Principal (Academics)',
          name: 'Mr Omomo',
          src: '/images/staff/staff-1.jpg',
        },
        {
          id: 3,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: '/images/staff/staff-2.jpg',
        },
      ],
    }
  },
}
</script>
