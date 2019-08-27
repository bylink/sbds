<template>
  <El-modal
    class="el-form-modal"
    :name="name"
    :is-large="isLarge"
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

      <ElLink
        v-if="cancelText"
        @click.prevent="handleCancel"
        variation="gray-darkest"
        size="xxs"
        color="gray"
      >
        {{ cancelText }}
      </ElLink>

      <div>
        <ElLink
          v-if="linkText"
          @click.prevent="handleClickLink"
          variation="gray-darkest"
          size="xxs"
          border="dashed"
          color="gray-darkest"
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
    isLarge: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmit() {
      if (this.loading) return
      this.$emit("submit")
    },
    handleCancel() {
      if (this.loading) return
      this.$emit("cancel")
    },
    handleClickLink() {
      if (this.loading) return
      this.$emit("clickLink")
    },
  },
}
</script>

<style lang="scss">
.el-form-modal {
  $block-name: &;

  & .el-link {
    margin-top: 24px;
    @media #{$media-query-m} {
      margin-top: 32px;
    }
  }
  & .el-button {
    @media #{$media-query-m} {
      margin-right: 32px;
    }
  }
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
