<template>
  <component :is="tag" class="el-title" :class="classObject">
    <slot name="icon-prepend" />
    <div class="el-title__text"><slot></slot></div>
    <slot name="icon-append" />
  </component>
</template>

<script>
export default {
  name: "ElTitle",
  props: {
    /**
     * Уровень: `h1`, `h2` и т.д.
     */
    level: {
      type: Number,
      default: 2,
    },
    /**
     * Размер: `xs`, `s` и т.д.
     */
    size: {
      type: String,
      default: "m",
    },
    /**
     * Межстрочный размер: `xs`, `s` и т.д.
     */
    lineHeight: {
      type: String,
      default: "m",
    },
    /**
     * В одну строку с точками в конце, если не вмещается
     */
    ellipsis: {
      type: Boolean,
      default: true,
    },
    /**
     * Цвет
     */
    color: {
      type: String,
      default: "gray-darkest",
    },
    /**
     * Family
     */
    family: {
      type: String,
      default: "heading",
    },
    /**
     * Если нужен другой тэг
     */
    tagName: {
      type: String,
    },
    /**
     * Uppercase
     */
    uppercase: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tag() {
      return this.tagName ? this.tagName : `h${this.level}`
    },
    classObject() {
      return {
        [`el-title--size-${this.size}`]: this.size,
        [`el-title--line-height-${this.lineHeight}`]: this.lineHeight,
        [`el-title--family-${this.family}`]: this.family,
        [`el-title--color-${this.color}`]: this.color,
        "el-title--ellipsis": this.ellipsis,
        "el-title--uppercase": this.uppercase,
      }
    },
  },
}
</script>

<style lang="scss">
.el-title {
  $block-name: &;
  margin-top: 0;
  margin-bottom: 0;
  font-family: $font-regular;
  line-height: $line-height-xs;
  font-weight: $weight-medium;
  display: inline-flex;
  max-width: 100%;
  width: 100%;

  &__text {
    padding-bottom: 1px; // fix overflow
    margin-bottom: -1px; // fix overflow
  }

  /*.el-svg-icon {*/
  /*  font-size: inherit;*/
  /*  width: 1em;*/
  /*  height: 1em;*/
  /*}*/

  /*> .el-svg-icon,*/
  /*.el-tooltip-target {*/
  /*  &:first-child {*/
  /*    margin-right: 0.3em;*/
  /*  }*/
  /*  &:last-child {*/
  /*    margin-left: 0.3em;*/
  /*  }*/
  /*}*/

  &--size-xxxxs {
    font-size: $size-xs;
  }

  &--size-xxxs {
    font-size: $size-xs;
  }

  &--size-xxs {
    font-size: $size-xs;
  }

  &--size-xs {
    font-size: $size-xs;
  }

  &--size-s {
    font-size: $size-s;
  }

  &--size-sm {
    font-size: $size-m;
  }

  &--size-m {
    font-size: $size-m;
  }

  &--size-ml {
    font-size: $size-ml;
  }

  &--size-l {
    font-size: $size-l;
  }

  &--size-xl {
    font-size: $size-xl;
  }

  &--size-xxl {
    font-size: $size-xxl;
  }

  &--size-xxxl {
    font-size: $size-xxxl;
  }

  &--size-xxxxl {
    font-size: $size-xxxxl;
  }

  &--line-height-xxxs {
    line-height: $line-height-xxxs;
  }

  &--line-height-xxs {
    line-height: $line-height-xxs;
  }

  &--line-height-xs {
    line-height: $line-height-xs;
  }

  &--line-height-s {
    line-height: $line-height-s;
  }

  &--line-height-sm {
    line-height: $line-height-sm;
  }

  &--line-height-m {
    line-height: $line-height-m;
  }

  &--line-height-ml {
    line-height: $line-height-ml;
  }

  &--line-height-l {
    line-height: $line-height-l;
  }

  &--line-height-xl {
    line-height: $line-height-xl;
  }

  &--line-height-xxl {
    line-height: $line-height-xxl;
  }

  &--line-height-xxxl {
    line-height: $line-height-xxxl;
  }

  &--ellipsis {
    align-items: center;

    #{$block-name} {
      &__text {
        @include ellipsis($display: inline-block);
        @include layout-flex-fix();
      }
    }
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--color {
    @each $color, $value in $token-colors {
      &-#{$color} {
        color: $value;
      }
    }
  }

  &--family-regular {
    font-family: $font-regular;
  }

  &--family-medium {
    font-family: $font-medium;
  }

  &--family-bold {
    font-family: $font-bold;
  }
}
</style>
