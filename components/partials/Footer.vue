<template>
  <footer>
    <nav class="bg-gray-200 text-gray-800 border-t py-8">
      <div class="container flex justify-between">
        <nav class="">&copy; Teckplus Technologies Limited</nav>
        <nav class="">{ Social Media Icons }</nav>
      </div>
    </nav>

    <nav class="bg-gray-100 text-gray-800 border-t py-8">
      <div class="container flex justify-between">
        <nav class="">&copy; {{ this.$config.schoolName }}</nav>
        <nav class="">
          <div>Powered By FutureX</div>
          <div class="pt-3">{ Social Media Icons }</div>
        </nav>
      </div>
    </nav>
  </footer>
</template>
