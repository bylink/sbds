<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="tagBind"
    class="el-button"
    v-on="$listeners"
    :exact="exact"
  >
    <slot name="icon-prepend" />
    <btn-loader v-if="loading" class="el-button__loader" color="inherit" :scale="loaderSize" />
    <span class="el-button__text"> <slot /> </span> <slot name="icon-append" />
  </component>
</template>

<script>
import "vue-loaders/dist/vue-loaders.css"
import BtnLoader from "vue-loaders/dist/loaders/ball-clip-rotate-multiple"
import ElSvgIcon from "./ElSvgIcon"
import ElTitle from "./ElTitle"
export default {
  name: "ElButton",
  components: {
    ElTitle,
    ElSvgIcon,
    "btn-loader": BtnLoader.component,
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
     *  Индикация загрузки
     *
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     *  Типы:
     *  `button, submit, reset`
     */
    type: {
      type: String,
      default: null,
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
     *  Радиус:
     *  `s, m, l, и т.д.`
     */
    radius: {
      type: String,
      default: "xxl",
    },
    /**
     *  Тень
     *
     */
    shadow: {
      type: Boolean,
      default: false,
    },
    /**
     *  Круглая
     *
     */
    rounded: {
      type: Boolean,
      default: false,
    },
    /**
     *  Позиция текста внутри кнопки:
     *  `left, center, right`
     */
    textAlign: {
      type: String,
      default: "center",
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
        [`el-button--variation-${this.variation}`]: this.variation,
        [`el-button--size-${this.size}`]: this.size,
        [`el-button--text-align-${this.textAlign}`]: this.textAlign,
        [`el-button--radius-${this.radius}`]: this.radius,

        "el-button--loading": this.loading,
        "el-button--is-active": this.isActive,
        "el-button--disabled": this.disabled,
        "el-button--rounded": this.rounded,
        "el-button--full-width": this.fullWidth,
        "el-button--uppercase": this.uppercase,
        "el-button--shadow": this.shadow,
      }
    },
    defaultTag() {
      return "button"
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
      } else if (this.disabled || this.loading) {
        result.disabled = true
      }
      result.type = this.type

      return result
    },
    loaderSize() {
      return this.variation === "gray-light-small" ? 0.5 : 0.8
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;

.el-button {
  $block-name: &;

  @include reset();
  padding: $space_xxs / 2 $space_m;
  font-family: $font-medium;
  letter-spacing: $spacing-m;
  font-weight: $weight-medium;
  font-size: $size-sm;
  line-height: $line-height-s;
  border-radius: $radius-xxl;
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

  &__loader {
    position: absolute !important;
    display: none !important;
    margin-top: -1px;
  }

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

        &#{$block-name} {
          &--shadow {
            box-shadow: 0 3px 10px fade-out($value, 0.8);
          }
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

          &#{$block-name} {
            &--shadow {
              box-shadow: 0 3px 10px fade-out($value, 0.8);
            }
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

          &#{$block-name} {
            &--shadow {
              box-shadow: 0 3px 10px fade-out($value, 0.8);
            }
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
            border-color: $color-pre-black;
            color: $color-white;
            background-color: $color-pre-black;
          }

          &:active {
            border-color: $color-pre-black;
            color: $color-white;
            background-color: $color-pre-black;
          }

          &#{$block-name} {
            &--shadow {
              box-shadow: 0 3px 10px fade-out($value, 0.8);
            }
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

  /*  &--is-active,
  &.nuxt-link-active {
    color: $color-main;
    background-color: transparent;
    border-color: transparent;
    pointer-events: none;
  }*/

  &--radius {
    &-xxl {
      border-radius: $radius-xxl;
    }
    &-xl {
      border-radius: $radius-xl;
    }
    &-l {
      border-radius: $radius-l;
    }
    &-m {
      border-radius: $radius-m;
    }
    &-s {
      border-radius: $radius-s;
    }
    &-none {
      border-radius: 0;
    }
  }

  &--rounded {
    border-radius: $radius-circle;
  }

  &--full-width {
    width: 100%;
  }

  &--text-align {
    &-left {
      #{$block-name} {
        &__text {
          margin-right: auto;
        }
      }
    }
    &-center {
      #{$block-name} {
        &__text {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    &-right {
      #{$block-name} {
        &__text {
          margin-left: auto;
        }
      }
    }
  }

  &--loading,
  &--disabled {
    pointer-events: none;
  }

  &--loading {
    #{$block-name} {
      &__loader {
        display: inline-block !important;
      }
    }

    > *:not(#{$block-name}__loader) {
      opacity: 0;
    }
  }

  &--disabled {
    opacity: $opacity-disabled;
  }
}
</style>

<docs>
  ```jsx
  let variations = [
  'main',
  'main-outline',
  'gray-light-small',
  'white',
  ]

  <div style="text-align: center">
    <div v-for="(variation, index) in variations" :key="index">

      <ElTitle style="margin-bottom: 20px;" size="l">{{ variation }}</ElTitle> <br>

      <ElButton :variation="variation" class="mc-button--is-active" size="xs">
        Маленькая
      </ElButton>

      <ElButton :variation="variation" class="mc-button--is-active" size="s">
        Активная
      </ElButton>

      <ElButton :variation="variation" size="s" loading>
        Лодер
      </ElButton>

      <ElButton :variation="variation">
        Стандартная
      </ElButton>

      <ElButton :variation="variation" size="l">
        Большая
      </ElButton>

      <ElButton uppercase shadow radius="l" :variation="variation" size="l">
        Добавить
      </ElButton>

      <ElButton :variation="variation" size="xl">
        Огромная
      </ElButton>

      <br><br>
    </div>

    <ElButton variation="main" size="m" full-width>
      На всю ширину родителя
    </ElButton>
  </div>
  ```
</docs>
