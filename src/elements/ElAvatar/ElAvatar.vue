<template>
  <figure class="el-avatar" :class="classes">
    <img
      v-if="lazy && src"
      v-lazy="{ src: src, attempt: 1 }"
      :key="src"
      alt="profile-image"
      class="el-avatar__img"
    />
    <img v-else-if="src" :src="src" alt="profile-image" class="el-avatar__img" />
    <div v-else class="el-avatar__pic"><ElSvgIcon name="avatar" :size="size" /></div>
  </figure>
</template>

<script>
import ElSvgIcon from "../ElSvgIcon"
export default {
  name: "ElAvatar",
  components: { ElSvgIcon },
  props: {
    /**
     *  Размеры:
     *  `xs, s, m, l, xl`
     */
    size: {
      type: String,
      default: "l",
    },
    /**
     *  Путь до изображения
     *
     */
    src: {
      type: String,
      default: null,
    },
    /**
     *  Отложенная подгрузка
     *
     */
    lazy: {
      type: Boolean,
      default: false,
    },
    /**
     *  Круглая
     *
     */
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        [`el-avatar--size-${this.size}`]: this.size,

        "el-avatar--rounded": this.rounded,
      }
    },
  },
}
</script>

<style lang="scss">
$avatars: $token-avatars;

.el-avatar {
  $block-name: &;

  @include reset();
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $color-gray-lightest;
  border-radius: $radius-m;
  overflow: hidden;
  background-color: transparent;

  &__pic {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @each $avatar, $value in $avatars {
    &--size-#{$avatar} {
      @include size($value);
    }
  }

  &--rounded {
    border-radius: 50%;
  }
}
</style>

<docs>
  ```jsx
  <div>

    <ElAvatar size="xs"/>
    <ElAvatar size="s"/>
    <ElAvatar size="m"/>
    <ElAvatar size="l"/>
    <ElAvatar size="xl"/>
    <ElAvatar size="xxxl"/>

    <ElAvatar size="xs" rounded/>
    <ElAvatar size="s" rounded/>
    <ElAvatar size="m" rounded/>
    <ElAvatar size="l" rounded/>
    <ElAvatar size="xl" rounded lazy/>
    <ElAvatar size="xxxl" rounded />

  </div>
  ```
</docs>
