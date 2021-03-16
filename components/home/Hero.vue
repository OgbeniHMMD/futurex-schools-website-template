<template>
  <section class="container py-12">
    <div
      class="lg:flex justify-between"
      :class="reversed ? 'flex-row-reverse' : ''"
    >
      <div
        class="lg:w-1/2 text-secondary"
        :style="reversed ? '' : ' place-self-center'"
      >
        <img :src="src" class="rounded shadow" style="max-height: 420px" />
      </div>

      <div
        class="lg:w-1/2 text-lg font-semibold p-8 flex justify-center items-center"
      >
        {{ title }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    reversed: { type: Boolean, default: false },
    src: { type: String, default: null },
    title: { type: String, default: null },
  },
}
</script>
