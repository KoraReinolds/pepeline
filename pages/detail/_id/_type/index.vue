<template>
  <div :class="$style.detail">
    <img
      :class="$style.image"
      :src="vehicle.image"
    >
    <div
      :class="$style.info"
    >
      <div
        :class="$style.header"
      >
       {{ vehicle.name }}
      </div>
      <div
        :class="$style.nav"
      >
        <nuxt-link
          :class="[$style.option, {
            [$style.active]: opt.name === active,
          }]"
          v-for="opt in options"
          :key="opt.name"
          :to="{
            name: 'detail-id-type',
            params: { id: vehicle.id, type: opt.name },
          }"
        >
          {{ opt.name }}
        </nuxt-link>
      </div>
      <template
        v-if="active === 'Specifications'"
      >
        <div :class="$style.text">
          {{ vehicle.specifications_text }}
        </div>
        <div :class="$style.title">
          Features:
        </div>
        <div :class="$style.features">
          <div :class="[$style.card, $style.challenge]">
            <Challenge :class="$style.icon" />
            <div :class="$style.card_info">
              <div :class="$style.card_title">
                A challenge for a true champion
              </div>
              <div :class="$style.text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </div>
            </div>
          </div>
          <div :class="[$style.card, $style.pilot]">
            <Pilot :class="$style.icon" />
            <div :class="$style.card_info">
              <div :class="$style.card_title">
                Pilot's sweaty hands
              </div>
              <div :class="$style.text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="active === 'Team'">
        <div :class="$style.text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </div>
        <div :class="$style.title">
          Qualified specialists
        </div>
        <div :class="$style.team_list">
          <div
            v-for="(people, index) in [
              { name: 'Marvin McKinney', pos: 'Pilot assistant' },
              { name: 'Savannah Nguyen', pos: 'Mechanic' },
              { name: 'Courtney Henry', pos: 'Stewardess' },
            ]"
            :class="$style.team_item"
            :key="'people' + index">
            <img :class="$style.image" :src="vehicle.preview">
            <div :class="$style.team_info">
              <div :class="$style.name">{{ people.name }}</div>
              <div :class="$style.position">{{ people.pos }}</div>
            </div>
          </div>
        </div>
        <div :class="$style.text">
          {{ vehicle.team_text }}
        </div>
      </template>
      <template v-else-if="active === 'Rent terms'">
        <div :class="$style.text">
          {{ vehicle.term_text }}
        </div>
        <div :class="$style.title">
          Additional conditions:
        </div>
        <ul :class="$style.term_list">
          <li :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
          <li :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
          <li :class="$style.text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
        </ul>
      </template>
      <div
        :class="$style.rent"
      >
        <span
          :class="$style.text"
        >
          Rent for
          <span :class="$style.price">{{ vehicle.rent }} $/h</span>
        </span>
        <span
          :class="$style.btn"
        >
          Rent now
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Challenge from '~/assets/svg/challenge.svg?inline';
import Pilot from '~/assets/svg/pilot.svg?inline';

export default {
  name: 'DetailPage',
  async validate({ route, store }) {
    let res = await store.dispatch('GET_VEHICLE_BY_ID', route.params.id);
    return res !== undefined;
  },
  async asyncData({ params }) {
    return {
      active: params.type,
      options: [
        {
          name: 'Specifications',
        },
        {
          name: 'Team',
        },
        {
          name: 'Rent terms',
        }
      ],
    }
  },
  components: {
    Challenge,
    Pilot,
  },
  computed: {
    vehicle() { return this.$store.getters.DETAIL_VEHICLE },
  },
}
</script>

<style module lang="scss">
.detail {
  display: flex;
  margin: 0 64px 56px 64px;
  @media (max-width: map-get($grid-breakpoints, md)) {
    flex-wrap: wrap;
    margin: 0 16px 32px 16px;
  }
  .image {
    width: 50%;
    max-height: 700px;
    border-radius: 24px;
    overflow: hidden;
    @media (max-width: map-get($grid-breakpoints, md)) {
      width: 100%;
    }
  }
  .info {
    width: 50%;
    padding-top: 54px;
    padding-left: 64px;
    @media (max-width: map-get($grid-breakpoints, md)) {
      padding-top: 22px;
      padding-left: 0;
      width: 100%;
    }
    .header {
      @include font($weight: bold, $size: 40px, $color: var(--base500), $mob_size: 24px, $line_height: 120%);
    }
    .nav {
      user-select: none;
      display: flex;
      margin: 32px 0;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin: 16px 0 20px 0;
      }
      .option {
        @include font($weight: bold, $size: 16px, $color: var(--base300), $line_height: 14px);
        margin-right: 32px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-right: 20px;
        }
        cursor: pointer;
        &.active {
          color: var(--main400);
        }
      }
    }
    .text {
      @include font($weight: 300, $size: 14px, $color: var(--base300), $line_height: 146%);
    }
    .title {
      @include font($weight: bold, $size: 24px, $color: var(--base500), $line_height: 21px);
      margin: 32px 0;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin: 20px 0;
      }
    }
    .features {
      margin-top: 32px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-top: 20px;
      }
      .card {
        min-height: 96px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          min-height: 80px;
        }
        &.pilot {
          margin-top: 16px;
          @media (max-width: map-get($grid-breakpoints, sm)) {
            margin-top: 12px;
          }
        }
        .icon {
          float: left;
          @media (max-width: map-get($grid-breakpoints, sm)) {
            width: 64px;
            height: 80px;
          }
        }
        .card_info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding-left: 24px;
          @media (max-width: map-get($grid-breakpoints, sm)) {
            padding-left: 16px;
          }
          .card_title {
            @include font($weight: bold, $size: 16px, $color: var(--base500), $line_height: 152%); 
            margin-bottom: 8px;
            @media (max-width: map-get($grid-breakpoints, sm)) {
              margin-bottom: 4px;
            }
          }
          .text {
            @include font($weight: 300, $size: 14px, $color: var(--base300), $line_height: 146%);
    
          }
        }
      }
    }
    .team_list {
      display: flex;
      margin-bottom: 32px;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        flex-direction: column;
      }
      .team_item {
        margin-right: 25px;
        @media (max-width: map-get($grid-breakpoints, sm)) {
          margin-right: 0;
          margin-bottom: 12px;
          height: 92px;
        }
        .image {
          height: 92px;
          width: 100%;
          border-radius: 16px;
          margin-bottom: 16px;
          @media (max-width: map-get($grid-breakpoints, sm)) {
            float: left;
            max-width: 132px;
            margin-right: 16px;
            margin-bottom: 0px;
          }
        }
        .team_info {
          @media (max-width: map-get($grid-breakpoints, sm)) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }
          .name {
            @include font($weight: bold, $size: 16px, $color: var(--base500), $line_height: 14px);
            margin-bottom: 8px;
            @media (max-width: map-get($grid-breakpoints, sm)) {
              margin-bottom: 4px;
            }
          }
          .position {
            @include font($weight: 300, $size: 12px, $color: var(--base300), $line_height: 148%);
          }
        }
      }
    }
    .term_list {
      list-style: none;
      padding: 0;
      li {
        display: flex;
        margin-bottom: 16px;
        &::before {
          content: '';
          border-radius: 50%;
          margin-top: 8px;
          min-width: 4px;
          height: 4px;
          background: var(--secondary400);
          margin-right: 20px;
          display: block;
          @media (max-width: map-get($grid-breakpoints, sm)) {
            margin-right: 12px;
          }
        }
      }
    }
    .rent {
      position: sticky;
      bottom: 32px;
      margin-top: 45px;
      background: var(--base50);
      height: 80px;
      border-radius: 16px;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: map-get($grid-breakpoints, sm)) {
        margin-top: 32px;
        height: 68px;
        padding: 0 24px;
      }
      .text {
        @include font($weight: bold, $size: 20px, $color: var(--base500), $line_height: 140%);
        @media (max-width: map-get($grid-breakpoints, sm)) {
          font-size: 16px;
        }
        .price {
          color: var(--secondary400);
        }
      }
    }
  }
}
</style>
