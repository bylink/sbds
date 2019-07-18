<template>
  <El-modal
    class="pt-form-modal"
    :name="name"
    @beforeOpen="event => $emit('beforeOpen', event)"
    @beforeClose="event => $emit('beforeClose', event)"
    @opened="event => $emit('opened', event)"
    @closed="event => $emit('closed', event)"
  >
    <slot name="title" slot="title"></slot>
    <form @submit.prevent="handleSubmit"><slot></slot></form>
    <template v-if="visibleFooter" slot="footer">
      <El-button @click.prevent="handleSubmit" :loading="loading" :disabled="submitDisabled">
        {{ submitText }}
      </El-button>
      <div>
        <ElLink
          v-if="linkText"
          variation="gray-darkest"
          size="xxs"
          border="dashed"
          border-color="main"
        >
          {{ linkText }}
        </ElLink>
      </div>
    </template>
  </El-modal>
</template>

<script>
import ElButton from "../elements/ElButton"
import ElModal from "../elements/ElModal"
import ElLink from "../elements/ElLink"
export default {
  name: "ElFormModal",
  components: { ElModal, ElButton, ElLink },
  props: {
    name: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
    },
    submitDisabled: {
      type: Boolean,
      disabled: false,
    },
    submitText: {
      type: String,
    },
    linkText: {
      type: String,
    },
    visibleFooter: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleSubmit() {
      if (this.loading) return
      this.$emit("submit")
    },
  },
}
</script>

<style lang="scss">
.pt-form-modal {
  $block-name: &;
}
</style>

<docs>
  ```jsx
  <div>
    <ElButton @click.prevent="$modal.show('testFormModal')">Open</ElButton>
    <ElFormModal name="testFormModal" cancel-text="Отмена" submit-text="Сохранить">
      <template slot="title">Заголовок</template>
      Контент
    </ElFormModal>
  </div>
  ```
</docs>
