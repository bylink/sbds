<template>
  <div class="el-title" :class="classObject">
    <slot name="icon-prepend" />
    <component :is="tagName" class="el-title__text"><slot /></component> <slot name="icon-append" />
  </div>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
export default {
  name: "ElTitle",
  components: { ElSvgIcon },
  props: {
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
      default: "regular",
    },
    /**
     * Если нужен другой тэг
     */
    tagName: {
      type: String,
      default: "div",
    },
    /**
     * Uppercase
     */
    uppercase: {
      type: Boolean,
      default: false,
    },
    /**
     * Uppercase
     */
    inline: {
      type: Boolean,
      default: false,
    },
    /**
     * По центру
     */
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      return {
        [`el-title--size-${this.size}`]: this.size,
        [`el-title--line-height-${this.lineHeight}`]: this.lineHeight,
        [`el-title--family-${this.family}`]: this.family,
        [`el-title--color-${this.color}`]: this.color,
        "el-title--ellipsis": this.ellipsis,
        "el-title--uppercase": this.uppercase,
        "el-title--inline": this.inline,
        "el-title--center": this.center,
      }
    },
  },
}
</script>

<style lang="scss">
$sizes: $token-sizes;
$line-heights: $token-line-heights;
$media-titles: $token-media-titles;

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
  transition: all 0.15s ease;

  &__text {
    padding-bottom: 1px; // fix overflow
    margin-bottom: -1px; // fix overflow
  }

  .el-svg-icon {
    font-size: inherit;
    /*width: 1em;*/
    /*height: 1em;*/
  }

  > .el-svg-icon,
  .el-tooltip-target {
    &:first-child {
      margin-right: 0.3em;
    }
    &:last-child {
      margin-left: 0.3em;
    }
  }

  @each $size, $value in $sizes {
    &--size-#{$size} {
      font-size: $value;
      /*      @each $media, $font in $media-titles($size) {
        @media (max-width: $media) {
          font-size: $font;
        }
      }*/
    }
  }

  @each $line-height, $value in $line-heights {
    &--line-height-#{$line-height} {
      line-height: $value;
    }
  }

  &--size-xxxxl {
    @media #{$media-query-m-down} {
      font-size: $size-xl;
      line-height: $line-height-xl;
    }
  }
  &--size-xxxl {
    @media #{$media-query-m-down} {
      font-size: $size-xl;
      line-height: $line-height-l;
    }
  }
  &--size-xxl {
    @media #{$media-query-m-down} {
      font-size: $size-xl;
      line-height: $line-height-l;
    }
  }
  &--size-xl {
    @media #{$media-query-m-down} {
      font-size: $size-l;
      line-height: $line-height-l;
    }
  }
  &--size-l {
    @media #{$media-query-m-down} {
      font-size: $size-ml;
      line-height: $line-height-ml;
    }
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

  &--center {
    display: flex;
    justify-content: center;
    text-align: center;

    & .el-svg-icon {
      @media #{$media-query-m} {
        width: 56px;
        height: 56px;
      }
    }
  }

  &--uppercase {
    text-transform: uppercase;
  }
  &--inline {
    width: auto;
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
<docs>
  ```jsx
  <div>
    <ElTitle size="s">
      <ElSvgIcon slot="icon-prepend" name="clock"/>
      Заголовок
    </ElTitle>

    <br><br>

    <ElTitle size="s">
      <ElSvgIcon slot="icon-prepend" name="map"/>
      Заголовок
      <ElSvgIcon slot="icon-append" name="user"/>
    </ElTitle>

    <br><br>

    <ElTitle size="m">
      <ElSvgIcon slot="icon-prepend" name="question"/>
      Заголовок
      <ElSvgIcon slot="icon-append" name="user"/>
    </ElTitle>

    <br><br>

    <ElTitle size="l">
      <ElSvgIcon slot="icon-prepend" name="wifi"/>
      Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок
    </ElTitle>

    <br><br>

    <ElTitle :ellipsis="false" size="xl">
      <ElSvgIcon slot="icon-prepend" name="wifi"/>
      Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок
    </ElTitle>

    <br><br>

    <ElTitle uppercase size="xxl">
      <ElSvgIcon slot="icon-prepend" name="wifi"/>
      Заголовок
    </ElTitle>

    <br><br>

    <ElTitle size="xxxl">
      <ElSvgIcon slot="icon-prepend" name="wifi"/>
      Заголовок
    </ElTitle>

    <br><br>

    <ElTitle size="xxxxl" line-height="xxxl" color="main">
      <ElSvgIcon slot="icon-prepend" name="wifi"/>
      Заголовок
    </ElTitle>
  </div>
  ```
</docs>
