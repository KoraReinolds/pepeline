
<template>
  <div :class="$style.error">
    <div :class="$style.box">
      <div :class="$style.title">
        An error has occurred
      </div> 
      <div :class="$style.text">
        Please refresh the page
      </div> 
      <span :class="$style.btn">
        Reload page
      </span>
    </div>    
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style module lang="scss">
.error {
  height: 100%;
  min-height: calc(100vh - 144px - 48px);
  background: var(--base50);
  border-radius: 48px;
  margin: 0 64px 48px 64px;
  position: relative;
  @media (max-width: map-get($grid-breakpoints, sm)) {
    border-radius: 24px;
    min-height: calc(100vh - 56px - 20px);
    margin: 0 0 20px 0;
  }
  .box {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 415px;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      min-width: 100%;
    }
    .title {
      @include font($weight: bold, $size: 40px, $color: var(--base500), $line_height: 120%, $mob_size: 24px);
      margin-bottom: 24px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-bottom: 16px;
      }
    }
    .text {
      @include font($weight: 300, $size: 14px, $color: var(--base300), $line_height: 146%);
      margin-bottom: 40px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-bottom: 32px;
      }
    }
    .btn {
      margin: 0 auto;
    }
  }
}
</style>