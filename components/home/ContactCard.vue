<template>
  <section id="contact" class="container py-8">
    <nav
      class="md:w-2/3 bg-gradient-to-r from-accent to-white rounded shadow-md mx-auto"
    >
      <nav
        class="flex justify-evenly bg-right bg-no-repeat bg-contain text-primary"
      >
        <div class="flex justify-between items-center w-full p-12">
          <div class="flex flex-column items-center h-full">
            <div>
              <h2 class="text-xl font-bold font-bolder pb-8">Contact Us!</h2>
              <div class="font-medium pb-4">
                <i class="fas fa-phone mr-4" /> {{ $config.schoolTelephone }}
              </div>
              <div class="font-medium tracking-wide">
                <i class="fas fa-envelope mr-4" /> {{ $config.schoolEmail }}
              </div>
            </div>
          </div>

          <div class="text-secondary">
            <i class="far fa-comments fa-10x invisible lg:visible" />
          </div>
        </div>
      </nav>
    </nav>
  </section>
</template>
