<template>
  <figure class="el-avatar" :class="classes">
    <img
      v-if="lazy && src"
      v-lazy="{ src: src, attempt: 1 }"
      :key="_src"
      alt=""
      class="el-avatar__img"
    />
    <img v-else-if="src" :src="src" alt="" class="el-avatar__img" />
    <div v-else class="el-avatar__pic"><ElSvgIcon name="Avatar" fill="white" :size="size" /></div>
  </figure>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
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

  &--size-xs {
    @include size($avatar-xs);
  }

  &--size-s {
    @include size($avatar-s);
  }

  &--size-m {
    @include size($avatar-m);
  }

  &--size-l {
    @include size($avatar-l);
  }

  &--size-xl {
    @include size($avatar-xl);
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

    <ElAvatar size="xs" rounded/>
    <ElAvatar size="s" rounded/>
    <ElAvatar size="m" rounded/>
    <ElAvatar size="l" rounded/>
    <ElAvatar size="xl" rounded lazy/>

  </div>
  ```
</docs>
