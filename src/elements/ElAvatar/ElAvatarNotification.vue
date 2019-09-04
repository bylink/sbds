<template>
  <section class="el-avatar-notification" :class="classes">
    <ElAvatar :size="size" :src="src" :lazy="lazy" rounded />
    <ElNotification
      :size="dotSize"
      :background="dotColor"
      :border="dotBorder"
      :borderColor="dotBorderColor"
    ></ElNotification>
  </section>
</template>

<script>
import ElAvatar from "./ElAvatar"
import ElNotification from "../ElNotification"

export default {
  name: "ElAvatarNotification",
  components: { ElAvatar, ElNotification },
  props: {
    /**
     *  Размеры:
     *  `xs, s, m, l, xl`
     */
    size: {
      type: String,
      default: "l",
    },
    /**
     *  Путь до изображения
     *
     */
    src: {
      type: String,
      default: null,
    },
    /**
     *  Цвет точки
     *
     */
    dotSize: {
      type: String,
      default: "xxs",
    },
    /**
     *  Цвет точки
     *
     */
    dotColor: {
      type: String,
      default: "main",
    },
    /**
     *  Бордер точки
     *
     */
    dotBorder: {
      type: Boolean,
      default: true,
    },
    /**
     *  Цвет бордера точки
     *
     */
    dotBorderColor: {
      type: String,
      default: null,
    },
    /**
     *  Отложенная подгрузка
     *
     */
    lazy: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        [`el-avatar-notification--size-${this.size}`]: this.size,
        "el-avatar-notification--rounded": this.rounded,
      }
    },
  },
}
</script>

<style lang="scss">
$dot-colors: $token-colors;

.el-avatar-notification {
  $block-name: &;

  display: inline-flex;
  position: relative;
  border-radius: 50%;
  background-color: #fff;

  & .el-notification {
    position: absolute;
    z-index: 2;
  }

  &--size-xs {
    & .el-notification {
      top: -2px;
      right: -1px;
    }
  }

  &--size-s {
    & .el-notification {
      top: -2px;
      right: -1px;
    }
  }

  &--size-m {
    & .el-notification {
      top: 0;
      right: 0;
    }
  }

  &--size-l {
    & .el-notification {
      top: 4px;
      right: 1px;
    }
  }

  &--size-xl {
    & .el-notification {
      top: 6px;
      right: 1px;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElAvatarNotification size="xs" dot-border-color="white" lazy/>
    <ElAvatarNotification size="s" dot-border-color="white" lazy/>
    <ElAvatarNotification size="m" dot-border-color="white" lazy/>
    <ElAvatarNotification size="l" dot-border-color="white" lazy/>
    <ElAvatarNotification size="xl" dot-border-color="white" lazy/>
  </div>
  ```
</docs>
