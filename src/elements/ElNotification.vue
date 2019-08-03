<template>
  <div class="el-notification" :class="classes"></div>
</template>

<script>
export default {
  name: "ElNotification",
  props: {
    /**
     *  Размер:
     *  `xs, s, m, l, xl`
     */
    size: {
      type: String,
      default: "xxs",
    },
    /**
     *  Цвет бэкграунда:
     *  `main, gray, white т.д.`
     */
    background: {
      type: String,
      default: "main",
    },
    /**
     *  Толщина бордера:
     *  `xs, s, m, l, xl`
     */
    border: {
      type: Boolean,
      default: true,
    },
    /**
     *  Цвет бордера:
     *  `main, gray, white т.д.`
     */
    borderColor: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return {
        [`el-notification--size-${this.size}`]: this.size,
        [`el-notification--background-${this.background}`]: this.background,
        [`el-notification--border-color-${this.borderColor}`]: this.borderColor,

        "el-notification--border": this.border,
      }
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;
$spaces: $token-spaces;

.el-notification {
  $block-name: &;
  border: none;
  border-radius: 50%;
  box-sizing: content-box;
  display: inline-block;

  @each $space, $value in $spaces {
    &--size-#{$space} {
      @include size($value);
    }
  }

  @each $color, $value in $colors {
    &--background-#{$color} {
      background-color: $value;
    }
  }

  &--border {
    border-style: solid;
    border-width: 2px;
    border-color: transparent;
  }

  @each $color, $value in $colors {
    &--border-color-#{$color} {
      border-color: $value;
    }
  }
}
</style>

<docs>
  ```jsx
    <div>
      <ElNotification></ElNotification>
      <ElNotification border="xs"></ElNotification>
      <ElNotification border="m" border-color="success"></ElNotification>
    </div>
  ```
</docs>
