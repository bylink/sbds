<template>
  <div class="pt-question" @mouseover="hovered = true" @mouseleave="hovered = false">
    <ElTooltip :content="content">
      <ElSvgIcon v-if="!hovered" name="question"></ElSvgIcon>
      <ElSvgIcon v-if="hovered" name="question-hovered"></ElSvgIcon>
    </ElTooltip>
  </div>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
import ElTooltip from "../elements/ElTooltip"

export default {
  name: "PtQuestion",
  components: { ElSvgIcon, ElTooltip },

  props: {
    /**
     * Текст тултипа
     */
    content: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      hovered: false,
    }
  },
}
</script>

<style lang="scss">
$spaces: $token-spaces;
$colors: $token-colors;

.pt-question {
  $block-name: &;

  display: inline-block;
  cursor: pointer;
  color: transparent;
}
</style>

<docs>
  ```jsx
  <div>
    <PtQuestion content="А если текста реально очень очень много, например как сейчас?"></PtQuestion>
  </div>
  ```
</docs>
