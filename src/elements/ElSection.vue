<template>
  <div class="el-section" :class="classes">
    <div class="el-section__container"><slot /></div>
  </div>
</template>

<script>
import ElTitle from "../elements/ElTitle"

export default {
  name: "ElSection",
  components: { ElTitle },
  props: {
    /**
     *  Цвет бэкграунда:
     *  `main, gray, white т.д.`
     */
    background: {
      type: String,
      default: "white",
    },
    /**
     *  Отступ сверху:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterTop: {
      type: String,
      default: null,
    },
    /**
     *  Отступ Снизу:
     *  `xs, s, m, l, xl и т.д.`
     */
    gutterBottom: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return {
        [`el-section--background-${this.background}`]: this.background,
        [`el-section--gutter-top-${this.gutterTop}`]: this.gutterTop,
        [`el-section--gutter-bottom-${this.gutterBottom}`]: this.gutterBottom,
      }
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;
$spaces: $token-spaces;

.el-section {
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

  &__container {
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    min-width: $container-s;
    max-width: $container-xl;

    @media #{$media-query-m} {
      padding: 0 32px;
    }

    @media #{$media-query-l} {
      padding: 0 40px;
    }

    @media #{$media-query-xl} {
      padding: 0 44px;
    }
  }
}
</style>

<docs>
  ```jsx
    <div>
      <ElSection background="gray" gutter-top="m" gutter-bottom="xl">
        <ElTitle >
          ElSection gutter top and bot
        </ElTitle>
      </ElSection>

      <ElSection background="gray-lightest" gutter-top="m" gutter-bottom="xl">
        <ElTitle >
          ElSection gutter top and bot
        </ElTitle>
      </ElSection>

      <ElSection>
        <ElTitle >
          ElSection default
        </ElTitle>
      </ElSection>

      <ElSection background="main" gutter-top="m">
        <ElTitle >
          ElSection gutter top
        </ElTitle>
      </ElSection>
    </div>
  ```
</docs>
