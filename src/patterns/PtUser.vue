<template>
  <ElDropdown>
    <ElAvatar :size="avatarSize" rounded></ElAvatar>
    <ElTitle :size="titleSize" :line-height="lineHeight">{{ title }}</ElTitle>
  </ElDropdown>
</template>

<script>
import ElDropdown from "../elements/ElDropdown"
import ElAvatar from "../elements/ElAvatar"
import ElTitle from "../elements/ElTitle"
export default {
  name: "PtUser",
  components: { ElDropdown, ElAvatar, ElTitle },
  props: {
    avatarSize: {
      type: String,
      default: "l",
    },
    title: {
      type: String,
      default: null,
    },
    lineHeight: {
      type: String,
      default: "l",
    },
  },
  methods: {},
}
</script>

<style lang="scss">
.pt-user {
  $block-name: &;
}
</style>

<docs>
  ```jsx
  <div>
  </div>
  ```
</docs>
