<template>
  <div class="el-separator" :class="classes"><slot></slot></div>
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
.el-separator {
  $block-name: &;

  width: 100%;
  height: 1px;
  background-color: $color-gray-lighter;

  &--indent-top-xxl {
    margin-top: $space-xxl;
  }

  &--indent-bottom-xxl {
    margin-bottom: $space-xxl;
  }

  &--indent-top-xl {
    margin-top: $space-xl;
  }

  &--indent-bottom-xl {
    margin-bottom: $space-xl;
  }

  &--indent-top-l {
    margin-top: $space-l;
  }

  &--indent-bottom-l {
    margin-bottom: $space-l;
  }

  &--indent-top-m {
    margin-top: $space-m;
  }

  &--indent-bottom-m {
    margin-bottom: $space-m;
  }

  &--indent-top-s {
    margin-top: $space-s;
  }

  &--indent-bottom-s {
    margin-bottom: $space-s;
  }
}
</style>
