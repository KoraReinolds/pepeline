<template>
  <div
    :class="$style.header"
  >
    <Logo :class="$style.logo"/>
    <div :class="$style.description">World's first affordable airsharing</div>
    <div
      :class="$style.theme"
      @click="changeTheme"
    >
      <Sun v-if="$nuxt.$colorMode.preference === 'dark'" :class="[$style.sun, $style.icon]" />
      <Moon v-else-if="$nuxt.$colorMode.preference === 'light'" :class="[$style.moon, $style.icon]" />
      <span :class="$style.text">{{ $nuxt.$colorMode.preference === 'dark' ? 'Day' : 'Night' }} mod</span>
    </div>
    <Chat :class="[$style.chat, $style.icon]" />
    <Notifications :class="[$style.notifications, $style.icon]" />
    <div
      :class="$style.avatar"
    >
      <div
        :class="$style.name"
      >Bessie Cooper</div>
      <img
        :class="$style.image"
      />
    </div>
  </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg?inline';
import Moon from '~/assets/svg/moon.svg?inline';
import Sun from '~/assets/svg/sun.svg?inline';
import Chat from '~/assets/svg/chat.svg?inline';
import Notifications from '~/assets/svg/notifications.svg?inline';

export default {
  name: 'Header',
  components: {
    Logo,
    Moon,
    Sun,
    Chat,
    Notifications,
  },
  methods: {
    changeTheme() {
      this.$nuxt.$colorMode.preference = this.$nuxt.$colorMode.preference === 'light' ? 'dark' : 'light';
    }
  },
}
</script>

<style module lang="scss">
  .header {
    min-height: 56px;
    padding: 48px 64px 40px 64px;
    display: flex;
    align-items: center;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      padding: 12px 16px;
    }
    .icon {
      cursor: pointer;
      width: 24px;
      height: 24px;
      @media (max-width: map-get($grid-breakpoints, xs)) {
        max-width: 20px;
        min-width: 20px;
        max-height: 20px;
        min-height: 20px;
      }
    }
    .logo {
      @media (max-width: map-get($grid-breakpoints, sm)) {
        height: 32px;
        width: 113.4px;
      }
    }
    .description {
      @include font($weight: 300, $size: 16px, $color: var(--base300));
      margin-left: 64.9px;
      @media (max-width: map-get($grid-breakpoints, lg)) {
        display: none;
      }
    }
    .theme {
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: auto;
      width: 227px;
      @media (max-width: map-get($grid-breakpoints, md)) {
        width: auto;
        margin-right: 16px;
      }
      text-align: left;
      .sun,
      .moon {
        width: auto;
      }
      .text {
        user-select: none;
        @include font($weight: 300, $size: 16px, $color: var(--base300));
        margin-left: 18px;
        @media (max-width: map-get($grid-breakpoints, md)) {
          display: none;
        }
      }
    }
    .chat {
      margin-right: 24px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-right: 16px;
      }
    }
    .notifications {
      margin-right: 56px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-right: 24px;
      }
    }
    .avatar {
      display: flex;
      align-items: center;
      .image {
        height: 56px;
        width: 56px;
        border-radius: 50%;
        background: lightgray;
        @media (max-width: map-get($grid-breakpoints, xs)) {
          width: 32px;
          height: 32px;
        }
      }
      .name {
        margin-right: 16px;
        @include font($weight: bold, $size: 16px, $color: var(--base500));
        @media (max-width: map-get($grid-breakpoints, sm)) {
          display: none;
        }
      }
    }
  }

</style>