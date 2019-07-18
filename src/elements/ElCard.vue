<template>
  <div class="el-card" :class="classes"><slot /></div>
</template>

<script>
import ElTitle from "../elements/ElTitle"

export default {
  name: "ElCard",
  components: { ElTitle },
  props: {
    /**
     *  Цвет бэкграунда:
     *  `main, gray, white т.д.`
     */
    background: {
      type: String,
      default: "gray-lightest",
    },
    /**
     *  Отступ сверху и снизу:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterY: {
      type: String,
      default: "m",
    },
    /**
     *  Отступ справа и слева:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterX: {
      type: String,
      default: "m",
    },
    /**
     *  Радиус:
     *  `xs, s, m, l, xl и т.д.`
     */
    radius: {
      type: String,
      default: null,
    },
    /**
     *  Цвет бордера:
     *  `main, gray, white т.д.`
     */
    borderColor: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return {
        [`el-card--background-${this.background}`]: this.background,
        [`el-card--gutter-y-${this.gutterY}`]: this.gutterY,
        [`el-card--gutter-x-${this.gutterX}`]: this.gutterX,
        [`el-card--border-radius-${this.radius}`]: this.radius,
        [`el-card--border-color-${this.borderColor}`]: this.borderColor,
      }
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;
$spaces: $token-spaces;
$radiuses: $token-radiuses;

.el-card {
  $block-name: &;

  @each $color, $value in $colors {
    &--background-#{$color} {
      background-color: $value;
    }
  }

  @each $space, $value in $spaces {
    &--gutter-y-#{$space} {
      padding-top: $value;
      padding-bottom: $value;
    }
  }

  @each $space, $value in $spaces {
    &--gutter-x-#{$space} {
      padding-right: $value;
      padding-left: $value;
    }
  }

  @each $radius, $value in $radiuses {
    &--border-radius-#{$radius} {
      border-radius: $value;
    }
  }

  @each $color, $value in $token-colors {
    &--border-color-#{$color} {
      border: 2px solid $value;
    }
  }
}
</style>

<docs>
  ```jsx
    <div>
      <ElCard>
        <ElTitle>
          ElCard default
        </ElTitle>
      </ElCard>

      <ElCard background="white" border-color="main" radius="xl">
        <ElTitle>
          ElCard gutter top and bot
        </ElTitle>
      </ElCard>

      <ElCard gutter-top="xs" gutterY="s" gutterX="m" border-color="success">
        <ElTitle>
          ElCard default
        </ElTitle>
      </ElCard>

      <ElCard background="main" gutterY="l">
        <ElTitle>
          ElCard gutter bot
        </ElTitle>
      </ElCard>
    </div>
  ```
</docs>
