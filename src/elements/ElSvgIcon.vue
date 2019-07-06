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
    /**
     *  Размеры отступа справа:
     *  `nano, xxxs, xxs, xs, s, m, l, xl`
     */
    indentRight: {
      type: String,
    },
    /**
     *  Размеры отступа слева:
     *  `nano, xxxs, xxs, xs, s, m, l, xl`
     */
    indentLeft: {
      type: String,
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
        [`el-svg-icon--indent-right-${this.indentRight}`]: this.indentRight,
        [`el-svg-icon--indent-left-${this.indentLeft}`]: this.indentLeft,
      }
    },
  },
}
</script>

<style lang="scss">
.el-svg-icon {
  @include reset();
  @include reset-text-indents();

  svg {
    width: inherit;
    height: inherit;
  }

  &--size-xxs {
    width: $tappable_element_xxs;
    height: $tappable_element_xxs;
  }

  &--size-xs {
    width: $tappable_element_xs;
    height: $tappable_element_xs;
  }

  &--size-s {
    width: $tappable_element_s;
    height: $tappable_element_s;
  }

  &--size-m {
    width: $tappable_element_m;
    height: $tappable_element_m;
  }

  &--size-l {
    width: $tappable_element_l;
    height: $tappable_element_l;
  }

  &--size-xl {
    width: $tappable_element_xl;
    height: $tappable_element_xl;
  }

  &--indent-right-nano {
    margin-right: $space-nano;
  }

  &--indent-right-xxxs {
    margin-right: $space-xxxs;
  }

  &--indent-left-nano {
    margin-left: $space-nano;
  }

  &--indent-left-xxxs {
    margin-left: $space-xxxs;
  }
}
</style>
