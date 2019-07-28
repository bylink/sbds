<template>
  <section class="el-avatar-status" :class="classes">
    <ElAvatar :size="size" :src="src" :lazy="lazy" rounded />
  </section>
</template>

<script>
import ElAvatar from "./ElAvatar"

export default {
  name: "ElAvatarStatus",
  components: { ElAvatar },
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
     *  Цвет точки
     *
     */
    dotColor: {
      type: String,
      default: "main",
    },
    /**
     *  Отложенная подгрузка
     *
     */
    lazy: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        [`el-avatar-status--size-${this.size}`]: this.size,
        [`el-avatar-status--dot-color-${this.dotColor}`]: this.dotColor,

        "el-avatar-status--rounded": this.rounded,
      }
    },
  },
}
</script>

<style lang="scss">
$dot-colors: $token-colors;

.el-avatar-status {
  $block-name: &;

  display: inline-flex;
  position: relative;
  border-radius: 50%;

  &::after {
    @include size(8px);
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    border-radius: 50%;
  }

  @each $color, $value in $dot-colors {
    &--dot-color-#{$color} {
      &::after {
        background-color: $value;
      }
    }
  }

  &--size-xs {
    &::after {
      top: 0;
      right: 1px;
    }
  }

  &--size-s {
    &::after {
      top: 0;
      right: 0;
    }
  }

  &--size-m {
    &::after {
      top: 3px;
      right: 0;
    }
  }

  &--size-l {
    &::after {
      top: 6px;
      right: 2px;
    }
  }

  &--size-xl {
    &::after {
      top: 7px;
      right: 3px;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElAvatarStatus size="xs" lazy/>
    <ElAvatarStatus size="s" lazy/>
    <ElAvatarStatus size="m" lazy/>
    <ElAvatarStatus size="l" lazy/>
    <ElAvatarStatus size="xl" lazy/>
  </div>
  ```
</docs>
