<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
    <!-- <Header :class="{ blur: $store.getters.ADD_MODE }" />
    <Nuxt :class="{ blur: $store.getters.ADD_MODE }" /> -->
    <!-- <AddVehicle /> -->
</div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-height: 100vh;
}

// .blur {
//   filter: blur(32px);
// }

.wrapper {
  width: 100%;
  max-width: map-get($grid-breakpoints, xl);
  min-height: 100vh;
  margin: 0 auto;
}

body,
#__layout,
#__nuxt {
  min-height: 100vh;
  background: var(--base0);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
