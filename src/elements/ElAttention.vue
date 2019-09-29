<template>
  <div v-if="isVisible" class="el-attention" :class="classes">
    <el-title :ellipsis="false" inline :color="color" size="xs" line-height="s">
      {{ text }}
    </el-title>
    <el-button :to="to" variation="gray-light-small"> Подробнее </el-button>
    <div class="el-attention__close" @click="handleClose">
      <el-svg-icon size="xxs" :fill="color" name="popup_close" />
    </div>
  </div>
</template>

<script>
import ElButton from "./ElButton"
import ElTitle from "./ElTitle"
import ElSvgIcon from "./ElSvgIcon"
export default {
  name: "ElAttention",
  components: { ElButton, ElTitle, ElSvgIcon },
  props: {
    background: {
      type: String,
      default: "mint",
    },
    color: {
      type: String,
      default: "white",
    },
    text: {
      type: String,
      default: "",
    },
    to: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    handleClose() {
      this.$emit("handleClose", this.name)
      this.isVisible = false
    },
  },
  computed: {
    classes() {
      return {
        [`el-attention--background-${this.background}`]: this.background,
        [`el-attention--color-${this.color}`]: this.color,
      }
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;
.el-attention {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px 10px 20px;
  width: 100%;
  z-index: 15;

  @each $color, $value in $colors {
    &--background-#{$color} {
      background-color: $value;
    }
  }
  @each $color, $value in $colors {
    &--color-#{$color} {
      & .el-button {
        color: $value;
        border: 1px solid $value;
      }
    }
  }
  & .el-title {
    margin-left: auto;
    margin-right: 17px;
  }

  & .el-button {
    display: none;
    @media #{$media-query-m} {
      display: block;
    }
  }

  &__close {
    margin-left: auto;
    cursor: pointer;
    padding: 3px;
    align-self: flex-start;
    & .el-svg-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      & svg {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <el-attention />
  </div>
  ```
</docs>
``
