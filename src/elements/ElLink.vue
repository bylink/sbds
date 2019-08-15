<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="tagBind"
    class="el-link"
    v-on="$listeners"
    :exact="exact"
    :target="getTarget"
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
    color: {
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
     * Подчеркивание:
     *   none, solid, dashed
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
    /**
     * Ссылка в новом окне
     */
    target: {
      type: Boolean,
      default: false,
    },
    /**
     * Ссылка простая
     */
    simple: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        [`el-link--color-${this.color}`]: this.color,
        [`el-link--size-${this.size}`]: this.size,
        [`el-link--border-${this.border}`]: this.border,
        [`el-link--border-color-${this.borderColor}`]: this.borderColor,

        "el-link--is-active": this.isActive,
        "el-link--disabled": this.disabled,
        "el-link--full-width": this.fullWidth,
        "el-link--uppercase": this.uppercase,
        "el-link--simple": this.simple,
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
    getTarget() {
      return this.target ? "_blank" : "_self"
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;

.el-link {
  $block-name: &;

  @include reset();
  vertical-align: inherit;
  font-family: $font-medium;
  letter-spacing: $spacing-m;
  font-weight: $weight-medium;
  font-size: $size-sm;
  line-height: $line-height-sm;
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
  text-transform: none;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  outline: 0;
  display: inline-flex;
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
    &--color-#{$color} {
      background-color: transparent;
      color: $value;

      &:hover,
      &:focus,
      &:active {
        color: $color-main;
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
          border-bottom-color: $color-main !important;
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

  /*  &--is-active,
  &.nuxt-link-active {
    color: $color-main;
    background-color: transparent;
    border-color: transparent;
    pointer-events: none;
  }*/

  &--full-width {
    width: 100%;
    justify-content: flex-start;
  }

  &--disabled {
    pointer-events: none;
    opacity: $opacity-disabled;
  }

  &----simple {
    color: inherit;
    border-bottom: 1px solid $color-main;

    &:hover,
    &:focus,
    &:active {
      border: none;
    }
  }
}
</style>

<docs>
  ```jsx
  let eventClick = eventClick => alert('1')
  <div style="padding: 15px; background-color: #f2f2f2;">
    <ElLink href="https://www.google.ru" border="solid">Ссылка</ElLink>
    <br>
    <ElLink color="white" border="dashed">Ссылка</ElLink>
    <br>
    <ElLink color="main" border="dashed" @click="eventClick">
      <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
      Ссылка
    </ElLink>
    <br>
    <ElLink size="xxxs" disabled>
      <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
      Ссылка
    </ElLink>
    <br>
    <ElLink border="dashed" color="gray-darkest" border-color="main">
      <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
      Ссылка
    </ElLink>
    <br>
  </div>
  ```
</docs>
