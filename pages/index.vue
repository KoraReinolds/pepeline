<template>
  <div :class="$style.main">
    <div :class="$style.nav">
      <div :class="$style.filter">
        <span>Rent <span :class="$style.target">whatever</span></span>
        <ArrowDownIcon :class="$style['arrow-down-icon']"/>
      </div>
      <div :class="$style.new">
        <span>Add new</span>
        <AddBtnIcon :class="$style['add-btn-icon']"/>
      </div>
    </div>
    <div :class="$style.vehicles">
      <VehicleItem
        v-for="vec in $store.getters.VEHICLES"
        :vehicle="vec"
        :key="vec.id"
      />
    </div>
  </div>
</template>

<script>
import ArrowDownIcon from '~/assets/svg/arrow-down.svg?inline';
import AddBtnIcon from '~/assets/svg/add-btn.svg?inline';

export default {
  name: 'MainPage',
  async validate({ route, store }) {
    let res = await store.dispatch('GET_VEHICLES')
    return res.error === undefined;
  },
  components: {
    ArrowDownIcon,
    AddBtnIcon,
  },
}
</script>

<style module lang="scss">
.main {
  box-sizing: border-box;
  padding: 56px 64px;
  margin: 0px 64px 48px 64px;
  border-radius: 48px;
  background: $base50;
  @media (max-width: map-get($grid-breakpoints, sm)) {
    margin: 8px 0 20px 0;
    padding: 0 16px;
    border-radius: 0 16px 24px 16px;
  }
  .nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      height: 80px;
    }
    .filter {
      display: flex;
      align-items: center;
      @include font($weight: bold, $size: 40px, $color: $base500, $mob_size: 24px);
      .arrow-down-icon {
        margin-left: 18px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-left: 8px;
          width: 8px;
        }
      }
      .target {
        color: $main400;
      }
    }
    .new {
      display: flex;
      align-items: center;
      @include font($weight: bold, $size: 20px, $color: $main400, $mob_size: 16px);
      .add-btn-icon {
        margin-left: 20px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-left: 12px;
          height: 32px;
          width: 32px;
        }
      }
    }
  }
  .vehicles {
    padding-top: 40px;
    display: grid;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      padding-top: 0px;
      grid-template-columns: repeat( 1, 100% );
      grid-gap: 12px;
    }
    grid-template-columns: repeat( auto-fit, minmax(370px, 1fr) );
    grid-gap: 32px;
  }
}
</style>
