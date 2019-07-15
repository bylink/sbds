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
      default: "gray-darken",
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
    /**
     * Подчеркивание
     */
    border: {
      type: String,
      default: "none",
    },
    /**
     * Цвет подчеркивания
     */
    borderColor: {
      type: String,
      default: "gray-darken",
    },
  },

  computed: {
    classes() {
      return {
        [`el-link--variation-${this.variation}`]: this.variation,
        [`el-link--size-${this.size}`]: this.size,
        [`el-link--border-${this.border}`]: this.border,
        [`el-link--border-color-${this.borderColor}`]: this.borderColor,

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
  font-family: $font-medium;
  letter-spacing: $spacing-m;
  font-weight: $weight-medium;
  font-size: $size-sm;
  line-height: $line-height-sm;
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
    &-xxxs {
      letter-spacing: normal;
      line-height: $line-height-xxs;
      font-weight: $weight-medium;
      font-size: $size-xxxs;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
    &-xxs {
      letter-spacing: normal;
      line-height: $line-height-xs;
      font-weight: $weight-medium;
      font-size: $size-xxs;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
    &-xs {
      letter-spacing: normal;
      line-height: $line-height-xs;
      font-weight: $weight-medium;
      font-size: $size-xs;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
    &-s {
      letter-spacing: normal;
      line-height: $line-height-s;
      font-weight: $weight-medium;
      font-size: $size-sm;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
    &-m {
      letter-spacing: $spacing-m;
      line-height: $line-height-sm;
      font-weight: $weight-medium;
      font-size: $size-sm;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
    &-l {
      letter-spacing: $spacing-m;
      font-weight: $weight-medium;
      font-size: $size-m;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
    &-xl {
      letter-spacing: normal;
      font-weight: $weight-medium;
      font-size: $size-l;

      .el-svg-icon,
      .el-avatar {
        &:first-child {
          margin-right: $space_nano;
        }

        &:last-child {
          margin-left: $space_nano;
        }
      }
    }
  }

  @each $color, $value in $colors {
    &--variation-#{$color} {
      background-color: transparent;
      color: $value;

      &:hover,
      &:focus,
      &:active {
        color: darken($value, 10%);
      }

      &#{$block-name} {
        &--border-none {
          & #{$block-name}__text {
            border: none;
          }
        }

        &--border-solid {
          & #{$block-name}__text {
            border-bottom: 1px solid $value;
          }
        }

        &--border-dashed {
          & #{$block-name}__text {
            border-bottom: 1px dashed $value;
          }
        }
      }
    }
  }

  @each $color, $value in $colors {
    &--border-color-#{$color} {
      &:hover,
      &:focus,
      &:active {
        & #{$block-name}__text {
          border-bottom-color: darken($value, 10%) !important;
        }
      }

      & #{$block-name}__text {
        border-color: $value !important;
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

<docs>
  ```jsx
  <div style="padding: 15px; background-color: #f2f2f2;">
    <ElLink href="https://www.google.ru" border="solid">Ссылка</ElLink>
    <ElLink variation="white" border="dashed">Ссылка</ElLink>
    <ElLink variation="main" border="dashed">
      <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
      Ссылка
    </ElLink>
    <ElLink size="xxxs" disabled>
      <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
      Ссылка
    </ElLink>
    <ElLink border="dashed" variation="gray-darkest" border-color="main">
      <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
      Ссылка
    </ElLink>
  </div>
  ```
</docs>
