<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="tagBind"
    class="el-link"
    v-on="$listeners"
    :exact="exact"
  >
    <slot name="icon-prepend" /> <span class="el-link__text"> <slot /> </span>
    <slot name="icon-append" />
  </component>
</template>

<script>
import ElSvgIcon from "./ElSvgIcon"
import ElTitle from "./ElTitle"
export default {
  name: "ElLink",
  components: {
    ElTitle,
    ElSvgIcon,
  },
  props: {
    /**
     *  Если нужна ссылка внутри приложения:
     * `{name: 'test', params: { id: test.id }}`
     */
    to: {
      default: null,
    },
    /**
     *  Если нужна обычная ссылка:
     * `https://mediacube.agency/`
     */
    href: {
      default: null,
    },
    /**
     *  По умолчанию ожидается использование в `nuxt.js`
     *
     */
    nuxt: {
      type: Boolean,
      default: true,
    },
    /**
     *  Отключенное состояние
     *
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     *  Дизайн:
     *  `main, main-outline, gray-light-small, white и т.д.`
     */
    variation: {
      type: String,
      default: "main",
    },
    /**
     *  Размеры:
     *  `s, s-compact, m, m-compact, l, l-compact, xl, xl-compact`
     */
    size: {
      type: String,
      default: "m",
    },
    /**
     *  На всю ширину
     *
     */
    fullWidth: {
      type: Boolean,
      default: false,
    },
    /**
     *  Если нужно активное состояние
     *
     */
    isActive: {
      type: Boolean,
      default: false,
    },
    /**
     *  exact
     *
     */
    exact: {
      type: Boolean,
      default: false,
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
    classes() {
      return {
        [`el-link--variation-${this.variation}`]: this.variation,
        [`el-link--size-${this.size}`]: this.size,

        "el-link--is-active": this.isActive,
        "el-link--disabled": this.disabled,
        "el-link--full-width": this.fullWidth,
        "el-link--uppercase": this.uppercase,
      }
    },
    defaultTag() {
      return "span"
    },
    tag() {
      if (this.to) {
        return this.nuxt ? "nuxt-link" : "router-link"
      } else if (this.href) {
        return "a"
      }
      return this.defaultTag
    },
    tagBind() {
      const result = {}
      if (this.to) {
        result.to = this.to
      } else if (this.href) {
        result.href = this.href
      } else if (this.disabled) {
        result.disabled = true
      }

      return result
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;

.el-link {
  $block-name: &;

  @include reset();
  padding: $space_xxs / 2 $space_m;
  font-family: $font-medium;
  letter-spacing: $spacing-m;
  font-weight: $weight-medium;
  font-size: $size-sm;
  line-height: $line-height-s;
  border-radius: $radius-xl;
  height: $tappable-element-l;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  text-decoration: none;
  text-transform: none;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  outline: 0;
  display: inline-flex;
  border: 1px solid transparent;
  justify-content: center;
  position: relative;
  transition: all $duration-quickly;
  flex-wrap: nowrap;
  max-width: 100%;
  align-items: center;
  color: $color-white;
  -webkit-appearance: none;
  -webkit-text-fill-color: currentColor;

  &__text {
    @include ellipsis($display: inline-block);
    @include layout-flex-fix();

    &:empty {
      display: none;
    }
  }

  &--size {
    &-xs {
      padding: $space_nano $space_s;
      letter-spacing: normal;
      font-weight: $weight-medium;
      font-size: $size-xs;
      height: $tappable-element-s;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_xs;
        }

        &:last-child {
          margin-left: $space_xs;
        }
      }
    }
    &-s {
      padding: $space_xxs / 2 $space_m;
      letter-spacing: normal;
      font-weight: $weight-medium;
      font-size: $size-sm;
      height: $tappable-element-m;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_xs;
        }

        &:last-child {
          margin-left: $space_xs;
        }
      }
    }
    &-m {
      padding: $space_xxs / 2 $space_m;
      letter-spacing: $spacing-m;
      font-weight: $weight-medium;
      font-size: $size-sm;
      height: $tappable-element-l;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_xs;
        }

        &:last-child {
          margin-left: $space_xs;
        }
      }
    }
    &-l {
      padding: $space_s / 2 $space_xl;
      letter-spacing: $spacing-m;
      font-weight: $weight-medium;
      font-size: $size-m;
      height: $tappable-element-xl;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_xs;
        }

        &:last-child {
          margin-left: $space_xs;
        }
      }
    }
    &-xl {
      padding: $space_xxs / 2 $space_l;
      letter-spacing: normal;
      font-weight: $weight-medium;
      font-size: $size-l;
      height: $tappable-element-xl;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_s;
        }

        &:last-child {
          margin-left: $space_s;
        }
      }
    }
  }

  @each $color, $value in $colors {
    &--variation-#{$color} {
      @if $color == "white" {
        background-color: transparent;
        border: 2px solid $value;

        &:hover,
        &:focus {
          background-color: $value;
          color: $color-pre-black;
        }

        &:active {
          background-color: $value;
          color: $color-pre-black;
        }
      } @else {
        background-color: $value;
        color: $color-white;
        border: 2px solid transparent;

        &:hover,
        &:focus {
          background-color: $color-main-focused;
        }

        &:active {
          background-color: $color-main-active;
        }

        &-invert {
          background-color: fade-out($value, 0.9);
          color: $value;

          &:hover,
          &:focus {
            background-color: fade-out($value, 0.8);
          }

          &:active {
            background-color: fade-out($value, 0.75);
          }
        }

        &-outline {
          border: 2px solid $value;
          color: $value;

          &:hover,
          &:focus {
            border-color: $color-main-focused;
            background-color: $color-main-focused;
            color: $color-white;
          }

          &:active {
            border-color: $color-main-active;
            background-color: $color-main-active;
            color: $color-white;
          }
        }

        &-small {
          border: 1px solid $value;
          color: $value;
          font-size: $size-xxxs;
          height: $space-s;
          line-height: $line-height-xxs;
          padding: $space_nano $space-xxs + 3;

          &:hover,
          &:focus {
            border-color: darken($value, 10%);
            color: darken($value, 15%);
          }

          &:active {
            border-color: darken($value, 25%);
            color: darken($value, 25%);
          }
        }

        &-link {
          color: $value;
          padding: 0;
          height: auto;
          width: auto;
          border: none;

          &:hover,
          &:focus {
            color: darken($value, 12%);
          }

          &:active {
            color: darken($value, 16%);
          }

          &#{$block-name} {
            &--disabled {
              opacity: $opacity-disabled;
              background-color: transparent !important;
              color: $value !important;
              border-color: transparent !important;
            }
          }
        }
      }
    }
  }

  &--uppercase {
    text-transform: uppercase;
  }

  &--is-active,
  &.nuxt-link-active {
    color: $color-main;
    background-color: transparent;
    border-color: transparent;
    pointer-events: none;
  }

  &--full-width {
    width: 100%;
  }

  &--disabled {
    pointer-events: none;
    opacity: $opacity-disabled;
  }
}
</style>
