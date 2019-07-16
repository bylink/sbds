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
     *  Отступ сверху:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterTop: {
      type: String,
      default: "m",
    },
    /**
     *  Отступ снизу:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterBottom: {
      type: String,
      default: "m",
    },
    /**
     *  Отступ слева:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterLeft: {
      type: String,
      default: "m",
    },
    /**
     *  Отступ справа:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterRight: {
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
        [`el-card--gutter-top-${this.gutterTop}`]: this.gutterTop,
        [`el-card--gutter-bottom-${this.gutterBottom}`]: this.gutterBottom,
        [`el-card--gutter-left-${this.gutterLeft}`]: this.gutterLeft,
        [`el-card--gutter-right-${this.gutterRight}`]: this.gutterRight,
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
    &--gutter-top-#{$space} {
      padding-top: $value;
    }
  }

  @each $space, $value in $spaces {
    &--gutter-bottom-#{$space} {
      padding-bottom: $value;
    }
  }

  @each $space, $value in $spaces {
    &--gutter-left-#{$space} {
      padding-left: $value;
    }
  }

  @each $space, $value in $spaces {
    &--gutter-right-#{$space} {
      padding-right: $value;
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
        <ElTitle >
          ElCard default
        </ElTitle>
      </ElCard>

      <ElCard background="white" border-color="main" radius="xl">
        <ElTitle >
          ElCard gutter top and bot
        </ElTitle>
      </ElCard>

      <ElCard gutter-top="xs" gutter-bottom="s" gutter-left="m" gutter-right="l" border-color="success">
        <ElTitle>
          ElCard default
        </ElTitle>
      </ElCard>

      <ElCard background="main" gutter-top="m">
        <ElTitle >
          ElCard gutter bot
        </ElTitle>
      </ElCard>
    </div>
  ```
</docs>
