<template>
  <div
    v-if="$store.getters.ADD_MODE"
    :class="$style.background"
  >
    <form :class="$style.form" action="">
      <div :class="$style.header">
        <span :class="$style.title">Add new vehicle</span>
        <CloseIcon
          :class="$style.icon"
          @click="$store.commit('SET_ADD_MODE', false)"
        />
      </div>
      <div :class="$style.add_image">
        <AddImage
          :class="$style.icon"
          @click="$store.commit('SET_ADD_MODE', false)"
        />
      </div>
      <div :class="[$style.input_name, $style.input]">
        <input placeholder="Name" type="text" />
      </div>
      <div :class="[$style.input_desc, $style.input]">
        <input placeholder="Description" type="text" />
      </div>
      <div :class="[$style.input_rent, $style.input]">
        <input placeholder="Rent price" type="number" />
      </div>
      <div :class="$style.btn">Complete</div>
    </form>
  </div>
</template>

<script>
import CloseIcon from '~/assets/svg/close.svg?inline';
import AddImage from '~/assets/svg/add-img.svg?inline';

export default {
  name: 'AddVehicle',
  components: {
    CloseIcon,
    AddImage,
  },
}
</script>

<style module lang="scss">
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(52, 79, 106, 0.32);
  .form {
    transition: width 0.3s;
    padding: 72px 64px;
    position: absolute;
    height: 100%;
    width: 600px;
    right: 0;
    border-radius: 48px 0 0 48px;
    background: var(--base0);
    display: flex;
    flex-direction: column;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      bottom: 0;
      height: 600px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      .title {
        @include font($weight: bold, $size: 40px, $color: var(--base500), $line-height: 120%);
      }
      .icon {
        cursor: pointer;
      }
    }
    .add_image {
      margin-top: 40px;
      padding: 150px 0;
      background: var(--base50);
      border-radius: 24px;
      display: flex;
      justify-content: center;
    }
    .input {
      position: relative;
    }
    .input input {
      width: 100%;
      margin-top: 24px;
      padding: 21px 24px;
      border: 0px;
      background: var(--base50);
      border-radius: 16px;
      @include font($weight: 300, $size: 16px, $color: var(--base300), $line-height: 14px);
    }
    .input_rent {
      &::after {
        @include font($weight: 300, $size: 16px, $color: var(--base300), $line-height: 14px);
        content: "$/h";
        position: absolute;
        margin-top: 24px;
        padding: 21px 0;
        right: 24px;
      }
      input {
        padding-right: 60px;
      }
    }
    .btn {
      margin-top: 40px;
      text-align: center;
    }
  }
}
</style>