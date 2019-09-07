<template>
  <ElFieldText
    ref="input"
    :type="type"
    :value="value"
    :title="title"
    :disabled="disabled"
    :name="name"
    :placeholder="placeholder"
    :helpText="helpText"
    :errors="errors"
    @input="handleInput"
  >
    <ElButton
      variation="gray-darker-link"
      default-tag="div"
      slot="append"
      size="s-compact"
      @click.prevent="handleToggleClick"
    >
      <ElSvgIcon slot="icon-append" :name="type === 'password' ? 'pwd_eye' : 'pwd_eye_opened'" />
    </ElButton>
    <slot name="footer" slot="footer" />
  </ElFieldText>
</template>

<script>
import ElFieldText from "./ElFieldText"
import ElSvgIcon from "../ElSvgIcon"
import ElButton from "../ElButton"

export default {
  name: "ElFieldPassword",
  components: { ElButton, ElSvgIcon, ElFieldText },
  props: {
    /**
     *  Заголовок поля:
     *
     */
    title: {
      type: String,
      default: null,
    },

    /**
     *  Вспомогательный текст в конце поля:
     *
     */
    helpText: {
      type: String,
      default: null,
    },

    /**
     *  Отключенное состояние
     *
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     *  Значение
     *
     */
    value: {
      default: null,
    },

    /**
     *  Ошибки
     *
     */
    errors: {
      type: [Array, Object],
      default: null,
    },

    /**
     *  Placeholder
     *
     */
    placeholder: {
      type: String,
      default: null,
    },

    /**
     *  Name
     *
     */
    name: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      type: "password",
    }
  },
  methods: {
    handleToggleClick() {
      this.type = this.type === "password" ? "text" : "password"
    },
    handleInput(value) {
      this.$emit("input", value)
    },
  },
}
</script>

<docs>
    ```jsx
    let inputPassword = null
    <div style="max-width: 700px;">
      <ElFieldPassword
              name="password123"
              title="passwordTitle"
              :errors="['Имя пользователя и пароль не совпадают', 'Поле обязательно для заполнения.']"
              help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
              v-model="inputPassword"
      >
      </ElFieldPassword>
    </div>
    ```
</docs>
