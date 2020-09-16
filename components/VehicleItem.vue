<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <nuxt-link
      :class="[$style.item, { [$style.hover]: hover }]"
      :to="{
        name: 'detail-id-type',
        params: { id: vehicle.id, type: 'Specifications' },
      }"
    >
      <img :class="$style.image" :src="vehicle.preview">
      <div :class="$style.info">
        <div :class="$style.name">{{ vehicle.name }}</div>
        <div :class="$style.description">{{ vehicle.description }}</div>
        <div :class="$style.rent">{{ vehicle.rent }} $/h</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'VehicleItem',
  data: () => ({
    hover: false,
  }),
  props: {
    vehicle: Object,
  }
}
</script>

<style module lang="scss">
  .item {
    cursor: pointer;
    display: block;
    text-decoration: none;

    min-width: 33%;
    height: 164px;
    background: var(--base0);
    border-radius: 32px;
    display: flex;
    transition: transform 0.1s;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      height: 151px;
    }
    &.hover {
      transform: scale(1.05);
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
        @include font($weight: bold, $size: 16px, $color: var(--base500));
      }
      .description {
        overflow: hidden;
        margin-top: 12px;
        max-height: 36px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-top: 12px;
        }
        @include font($weight: 300, $size: 12px, $color: var(--base300));
      }
      .rent {
        margin-top: 16px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-top: 16px;
        }
        @include font($weight: bold, $size: 14px, $color: var(--secondary400));
      }
    }
  }

</style>