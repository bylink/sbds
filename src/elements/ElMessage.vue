<template>
  <div class="el-message" :class="classes"><slot /></div>
</template>

<script>
export default {
  name: "ElMessage",

  props: {
    /**
     * Цвет
     */
    color: {
      type: String,
      default: "gray-lighter",
    },
  },

  computed: {
    classes() {
      return {
        [`el-message--color-${this.color}`]: this.color,
      }
    },
  },
}
</script>

<style lang="scss">
$spaces: $token-spaces;
$colors: $token-colors;

.el-message {
  $block-name: &;

  width: 100%;
  height: 1px;
  background-color: $color-gray-lighter;

  @each $color, $value in $colors {
    &--color-#{$color} {
      background-color: $value;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElMessage indent-top="xs" indent-bottom="xs"/>
  </div>
  ```
</docs>
