<template>
  <section id="departments" class="container py-12">
    <h2 class="text-xl text-center font-semibold py-8">Departments</h2>

    <div class="flex justify-around py-8">
      <div
        v-for="dept in departments"
        :key="dept.title"
        class="flex-1 font-semibold text-primary text-center"
      >
        <i :class="dept.icon" class="fas fa-7x" />
        <div class="py-4 text-lg">{{ dept.title }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      departments: [
        {
          title: 'Business & Commerce',
          icon: 'fa-chart-line',
        },
        {
          title: 'Art & Humanity',
          icon: 'fa-landmark',
        },
        {
          title: 'Science',
          icon: 'fa-microscope',
        },
      ],
    }
  },
}
</script>
