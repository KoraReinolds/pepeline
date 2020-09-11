<template>
  <div :class="$style.item">
    <img :class="$style.image" :src="vehicle.preview">
    <div :class="$style.info">
      <div :class="$style.name">{{ vehicle.name }}</div>
      <div :class="$style.description">{{ vehicle.description }}</div>
      <div :class="$style.rent">{{ vehicle.rent }} $/h</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleItem',
  props: {
    vehicle: Object,
  }
}
</script>

<style module lang="scss">
  .item {
    min-width: 33%;
    height: 164px;
    background: $base0;
    border-radius: 32px;
    display: flex;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      height: 151px;
    }
    .image {
      margin: 24px 24px auto 32px;
      width: 88px;
      height: 88px;
      border-radius: 24px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin: 20px 20px auto 20px;
      }
    }
    .info {
      overflow: hidden;
      margin-right: 32.33px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-right: 20px;
      }
      .name {
        margin-top: 40px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-top: 32px;
        }
        @include header1;
      }
      .description {
        overflow: hidden;
        margin-top: 12px;
        max-height: 36px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-top: 12px;
        }
        @include text1;
      }
      .rent {
        margin-top: 16px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-top: 16px;
        }
        @include price1;
      }
    }
  }

</style>