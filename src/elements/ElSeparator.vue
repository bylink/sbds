<template>
  <div class="el-separator" :class="classes"><slot /></div>
</template>

<script>
export default {
  name: "ElSeparator",

  props: {
    /**
     * Отступ сверху
     */
    indentTop: {
      type: String,
      default: null,
    },
    /**
     * Отступ снизу
     */
    indentBottom: {
      type: String,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        [`el-separator--indent-top-${this.indentTop}`]: this.indentTop,
        [`el-separator--indent-bottom-${this.indentBottom}`]: this.indentBottom,
      }
    },
  },
}
</script>

<style lang="scss">
$spaces: $token-spaces;

.el-separator {
  $block-name: &;

  width: 100%;
  height: 1px;
  background-color: $color-gray-lighter;

  @each $space, $value in $spaces {
    &--indent-top-#{$space} {
      margin-top: $value;
      margin-bottom: $value;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElSeparator indent-top="xs" indent-bottom="xs"/>
  </div>
  ```
</docs>
