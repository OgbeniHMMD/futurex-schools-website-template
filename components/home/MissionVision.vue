<template>
  <section id="departments" class="container py-12">
    <div class="flex justify-around py-8">
      <div
        v-for="item in misionVision"
        :key="item.title"
        class="md:w-1/3 text-center"
      >
        <div class="py-4 text-xl font-semibold text-primary text-wider">
          {{ item.title }}
        </div>

        <div class="py-4">{{ item.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      misionVision: [
        {
          title: 'Mission Statement',
          text:
            'Our mission is to Teach Student the right attitude and life Skills through quality Education',
        },
        {
          title: 'Vision Statement',
          text:
            'Our vision is to train children how to have love for hard work and honesty. Our mission is teaching children the right attitude and life skills through quality education',
        },
      ],
    }
  },
}
</script>
