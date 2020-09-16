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
      <label
        :class="$style.add_image"
        for="file"
        v-if="!image"
      >
          <input
            :class="$style.inputfile"
            type="file"
            id="file"
            @change="loadImage($event)"
          >
          <AddImage
            :class="$style.icon"
          />
      </label>
      <img v-else :class="$style.add_image" :src="image">
      <div :class="[$style.input_name, $style.input]">
        <input v-model="vecName" placeholder="Name" type="text" />
      </div>
      <div :class="[$style.input_desc, $style.input]">
        <input v-model="desc" placeholder="Description" type="text" />
      </div>
      <div :class="[$style.input_rent, $style.input]">
        <input v-model="rent" placeholder="Rent price" type="number" />
      </div>
      <div
        :class="$style.btn"
        @click="addVehicle"
      >
        Complete
      </div>
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
  data: () => ({
    image: '',
    vecName: '',
    desc: '',
    rent: '',
  }),
  methods: {
    handleScroll (event) {
      if (this.$store.getters.ADD_MODE) {
        window.scrollTo(0,0);
      }
    },
    loadImage({ target: { files } }) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = async () => {
        this.image = reader.result;
      };
    },
    addVehicle() {
      this.$store.commit("ADD_VEHICLE", {
        image: this.image,
        name: this.vecName,
        description: this.desc,
        rent: this.rent,
      })
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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
      padding: 28px 16px 32px 16px;
      bottom: 0;
      width: 100%;
      height: auto;
      border-radius: 24px 24px 0 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      .title {
        @include font($weight: bold, $size: 40px, $color: var(--base500), $line-height: 120%, $mob_size: 24px);
      }
      .icon {
        cursor: pointer;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          width: 32px;
          height: 32px;
        }
      }
    }
    .add_image {
      cursor: pointer;
      margin-top: 40px;
      height: 328px;
      background: var(--base50);
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
      .inputfile {
        width: 0px;
        height: 0px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .icon {
        @media (max-width: map-get($grid-breakpoints, sm)) {
          width: 32px;
          height: 32px;
        }
      }
      @media (max-width: map-get($grid-breakpoints, sm)) {
        height: 260px;
        margin-top: 24px;
        border-radius: 16px;
      }
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
      outline: none;
      @include font($weight: 300, $size: 16px, $color: var(--base300), $line-height: 14px);
      @media (max-width: map-get($grid-breakpoints, sm)) {
        @include font($weight: 300, $size: 14px, $color: var(--base300), $line-height: 12px);
        padding: 20px;
      }
    }
    .input_rent {
      &::after {
        @include font($weight: 300, $size: 16px, $color: var(--base300), $line-height: 14px);
        @media (max-width: map-get($grid-breakpoints, sm)) {
          @include font($weight: 300, $size: 14px, $color: var(--base300), $line-height: 12px);
        }
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
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-top: 24px;
      }
    }
  }
}
</style>