<template>
  <div class="el-toggler" :class="classes">
    <div class="el-toggler__inner" @click="opened = !opened">
      <slot name="toggler">
        <el-svg-icon name="arrow_job" />
        <el-title class="el-toggler__title" :variation="color" size="xl" line-height="l">
          {{ title }}
        </el-title>
      </slot>
    </div>

    <div v-if="opened" class="el-toggler__body"><slot>123</slot></div>
  </div>
</template>

<script>
import ElTitle from "./ElTitle"
import ElSvgIcon from "./ElSvgIcon"
export default {
  name: "ElToggler",
  components: { ElTitle, ElSvgIcon },
  props: {
    /**
     * Цвет
     */
    title: {
      type: String,
      default: null,
    },
    /**
     * Цвет
     */
    color: {
      type: String,
      default: "gray-darkest",
    },
  },

  data() {
    return {
      opened: false,
    }
  },

  computed: {
    classes() {
      return {
        [`el-toggler--color-${this.color}`]: this.color,
        "el-toggler--opened": this.opened,
      }
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;
.el-toggler {
  $block-name: &;

  &__inner {
    display: flex;
    align-items: center;
    user-select: none;
    margin-bottom: 24px;
    @media #{$media-query-m} {
      margin-bottom: 32px;
    }

    & .el-svg-icon {
      margin-right: 14px;
      transition: all 0.2s ease;
    }
  }
  &__title {
    cursor: pointer;
  }

  &__body {
    padding-left: 38px;
    margin-top: 32px;
    @media #{$media-query-m} {
      margin-top: 40px;
    }
  }

  &--opened {
    & .el-svg-icon {
      transform: rotate(-180deg);
    }
  }

  @each $color, $value in $colors {
    &--color-#{$color} {
      color: $value;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElToggler title="Toggler" />
  </div>
  ```
</docs>
