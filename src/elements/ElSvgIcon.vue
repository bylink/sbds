<template>
  <component :is="type" class="el-svg-icon" :class="classes" v-html="svg"></component>
</template>

<script>
const req = require.context("../assets/icons/", true, /^\.\/.*\.svg$/)

/**
 * Svg изображения, иконки
 *
 *
 */

export default {
  name: "ElSvgIcon",
  props: {
    /**
     * Название
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Цвет заливки
     */
    fill: {
      type: String,
      default: "currentColor",
    },
    /**
     * html тег обёртки
     */
    type: {
      type: String,
      default: "span",
    },
    /**
     *  Размеры:
     *  `xxs, xs, s, m, l, xl`
     */
    size: {
      type: String,
      default: "xs",
    },
  },
  data() {
    return {
      svg: null,
    }
  },
  watch: {
    name: {
      handler(val) {
        this.svg = req("./" + val + ".svg").replace(/^<svg /, `<svg style="fill: ${this.fill}"`)
      },
      immediate: true,
    },
  },
  computed: {
    classes() {
      return {
        [`el-svg-icon--size-${this.size}`]: this.size,
      }
    },
  },
}
</script>

<style lang="scss">
$sizes: $token-tappable-elements;

.el-svg-icon {
  @include reset();
  @include reset-text-indents();

  svg {
    width: inherit;
    height: inherit;
  }

  @each $size, $value in $sizes {
    &--size-#{$size} {
      width: $value;
      height: $value;
    }
  }
}
</style>

<docs>
  ```jsx
  let icons = require('@/utils/load-icons').default;
  <div>
    <div v-for="(icon, index) in icons" :key="index">
      <ElSvgIcon :name="icon" size="m"/> {{ icon }}
    </div>
  </div>
  ```
</docs>
