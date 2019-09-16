<template>
  <div class="el-message" :class="classes">
    <el-card gutter-x="xs" gutter-y="xs" :border-color="getColor" background="white" radius="xl">
      <div class="el-message__inner">
        <el-title :color="getColor" size="sm" line-height="sm">
          <el-svg-icon
            :name="getIcon"
            slot="icon-prepend"
            :size="status === 'error' ? 'xs' : 's'"
          />
          {{ getText }}
        </el-title>
      </div>
    </el-card>
  </div>
</template>

<script>
import ElCard from "./ElCard"
import ElTitle from "./ElTitle"
import ElSvgIcon from "./ElSvgIcon"
export default {
  name: "ElMessage",
  components: { ElCard, ElTitle, ElSvgIcon },
  props: {
    /**
     *  Статус:
     *  error, success, info
     */
    status: {
      type: String,
      default: "success",
    },
  },
  computed: {
    classes() {
      return {
        [`el-message--status-${this.status}`]: this.status,
      }
    },
    getColor() {
      if (this.status === "success") return "success"
      if (this.status === "error") return "danger"
      if (this.status === "info") return "gray-darkest"
    },
    getText() {
      if (this.status === "success") return "Заказ отредактирован!"
      if (this.status === "error") return "Ошибка"
      if (this.status === "info") return "Информация"
    },
    getIcon() {
      if (this.status === "success") return "checkbox-arrow"
      if (this.status === "error") return "popup_close"
      if (this.status === "info") return "checkbox-info"
    },
  },
}
</script>

<style lang="scss">
.el-message {
  &__inner {
    display: flex;
    & .el-svg-icon {
      margin-right: 14px !important;
    }
  }
}
</style>

<docs>
  ```jsx
    <div>
      <ElMessage />
      <br>
      <ElMessage status="error"/>
      <br>
      <ElMessage status="info"/>
    </div>
  ```
</docs>
