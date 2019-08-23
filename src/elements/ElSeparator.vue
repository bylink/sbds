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
        [`el-separator--indent-top-${this.indentTop}`]: this.indentTop,
        [`el-separator--indent-bottom-${this.indentBottom}`]: this.indentBottom,
        [`el-separator--color-${this.color}`]: this.color,
      }
    },
  },
}
</script>

<style lang="scss">
$spaces: $token-spaces;
$colors: $token-colors;

.el-separator {
  $block-name: &;

  width: 100%;
  height: 1px;
  background-color: $color-gray-lighter;

  @each $space, $value in $spaces {
    &--indent-top-#{$space} {
      margin-top: $value;
    }
    &--indent-bottom-#{$space} {
      margin-bottom: $value;
    }
  }
  @each $color, $value in $colors {
    &--color-#{$color} {
      background-color: $value;
    }
  }

  &--indent-top-xl,
  &--indent-bottom-xl {
    @media #{$media-query-m-down} {
      margin-top: $space-m;
    }
  }

  &--indent-top-l,
  &--indent-bottom-l {
    @media #{$media-query-m-down} {
      margin-top: $space-m;
    }
  }

  &--indent-top-m,
  &--indent-bottom-m {
    @media #{$media-query-m-down} {
      margin-top: $space-s;
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
