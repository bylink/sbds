<template>
  <div class="el-field-text" :class="classes">
    <label :for="name" class="el-field-text__header">
      <slot name="header">
        <ElTitle
          :ellipsis="false"
          v-if="title"
          :size="titleSize"
          :line-height="titleLineHeight"
          color="gray"
        >
          {{ title }}
        </ElTitle>
      </slot>
    </label>
    <div class="el-field-text__main">
      <div class="el-field-text__prepend"><slot name="prepend" /></div>
      <div class="el-field-text__input-wrapper">
        <flat-pickr
          v-if="isDate"
          class="el-field-text__input"
          :style="inputStyles"
          :placeholder="placeholder"
          :value="value"
          :name="name"
          ref="input"
          :disabled="disabled"
          :id="name"
          v-model="date"
          @focus="inputFocused = true"
          @blur="handleBlur"
          v-on="listeners"
          @input="value => handleInput(value)"
        ></flat-pickr>
        <textarea
          v-else-if="isTextarea"
          class="el-field-text__input"
          :style="inputStyles"
          :placeholder="placeholder"
          :value="value"
          :disabled="disabled"
          :name="name"
          :id="name"
          @focus="inputFocused = true"
          @blur="handleBlur"
          v-on="listeners"
          @input="$event => handleInput($event.target.value)"
        ></textarea>
        <input
          v-else
          class="el-field-text__input"
          :style="inputStyles"
          :disabled="disabled"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          ref="input"
          :name="name"
          :id="name"
          @focus="inputFocused = true"
          @blur="handleBlur"
          v-on="listeners"
          @input="$event => handleInput($event.target.value)"
        />
      </div>
      <div class="el-field-text__append"><slot name="append" /></div>
    </div>
    <div class="el-field-text__footer">
      <ElTitle
        tag-name="div"
        :ellipsis="false"
        color="danger"
        line-height="xxxs"
        size="xxxs"
        v-if="errorText"
      >
        {{ errorText }}
      </ElTitle>
      <br v-if="errorText" />
      <slot name="footer"
        ><ElTitle tag-name="div" :ellipsis="false" line-height="xxxs" size="xxxs" v-if="helpText">
          {{ helpText }}</ElTitle
        >
      </slot>
    </div>
  </div>
</template>

<script>
import _omit from "lodash/omit"

import tokens from "../../assets/tokens/tokens"
import flatPickr from "vue-flatpickr-component"

import ElTitle from "../ElTitle"
import ElSvgIcon from "../ElSvgIcon"
import ElButton from "../ElButton"
// import ElTooltip from "../ElTooltip"

export default {
  name: "ElFieldText",
  components: { /* ElTooltip,*/ ElButton, ElSvgIcon, ElTitle, flatPickr },
  props: {
    /**
     *  Тип:
     * `text, password, email и т.д.`
     */
    type: {
      type: String,
      default: "text",
    },

    /**
     *  Заголовок поля:
     *
     */
    title: {
      type: String,
      default: null,
      required: true,
    },

    /**
     *  Вспомогательный текст под инпутом:
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
     *  Без границ
     *
     */
    borderless: {
      type: Boolean,
      default: false,
    },

    /**
     *  Без радиусов
     *
     */
    radiusless: {
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
      type: Array,
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
      required: true,
    },
  },

  data() {
    return {
      prependWidth: 0,
      appendWidth: 0,
      inputFocused: false,
      date: new Date(),
    }
  },

  mounted() {
    this.calculatePadding()
  },

  computed: {
    classes() {
      return {
        "el-field-text--error": this.errorText,
        "el-field-text--textarea": this.isTextarea,
        "el-field-text--date": this.isDate,
        "el-field-text--disabled": this.disabled,
        "el-field-text--focused": this.inputFocused,
        "el-field-text--borderless": this.borderless,
        "el-field-text--radiusless": this.radiusless,
      }
    },

    titleSize() {
      if (this.isDate) {
        return "xxxs"
      }
      return this.inputFocused ? "xxxs" : "s"
    },

    titleLineHeight() {
      if (this.isDate) {
        return "xxs"
      }
      return this.inputFocused ? "xxs" : "s"
    },

    isTextarea() {
      return this.type === "textarea"
    },

    isDate() {
      return this.type === "date"
    },

    errorText() {
      if (this.errors == null || this.errors.length === 0) return null
      return this.errors.join(", ")
    },

    inputStyles() {
      return {
        paddingLeft: this.prependWidth && `${this.prependWidth + parseInt(tokens.space_m)}px`,
        paddingRight: this.appendWidth && `${this.appendWidth + parseInt(tokens.space_m)}px`,
      }
    },

    listeners() {
      return _omit(this.$listeners, "input")
    },
  },

  methods: {
    handleBlur() {
      if (this.value === null || this.value === "") {
        this.inputFocused = false
      }
    },

    handleInput(value) {
      this.$emit("input", value)
    },

    calculatePadding() {
      this.prependWidth = this.calculateSlotPadding("prepend")
      this.appendWidth = this.calculateSlotPadding("append")
    },

    calculateSlotPadding(name) {
      return (
        this.$slots[name] &&
        this.$slots[name].reduce((acc, cur) => {
          const $el = cur.elm ? cur.elm : cur
          return acc + $el.getBoundingClientRect().width
        }, 0)
      )
    },
  },
}
</script>

<style lang="scss">
@import "~flatpickr/dist/flatpickr";

.el-field-text {
  $block-name: &;

  display: block;
  position: relative;

  &--focused,
  &--date {
    & #{$block-name} {
      &__header {
        top: $space-xxs;
      }
    }
  }

  &__header {
    @include reset-text-indents();
    display: block;
    position: absolute;
    left: $space-xs;
    top: $space-xs;
    z-index: 1;
    pointer-events: none;
    transition: all 0.15s ease;
  }

  &__main {
    position: relative;
  }

  &__prepend,
  &__append {
    @include reset-text-indents();
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: $space-xs;
    padding-right: $space-xs;
    min-width: $tappable-element-m;
    height: 100%;
    margin-left: -$space-xxxs;
    margin-right: -$space-xxxs;
    padding-top: $space-xxs + 2;
    padding-bottom: $space-xxs + 2;

    &:empty {
      display: none;
    }

    > * {
      margin-left: $space-xxxs;
      margin-right: $space-xxxs;
    }
  }

  &__prepend {
    left: 0;
  }

  &__append {
    right: 0;
  }

  &__input {
    font-family: $font-regular;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    min-height: $tappable-element-xl;
    margin: 0;
    border: 1px solid $color-gray-light;
    border-radius: $radius-xs + 1;
    padding: $space_s + 2 $space-xs $space-xxs $space-xs;
    line-height: $line-height-s;
    font-size: $size-s;
    background-color: $color-white;
    -moz-appearance: textfield;
    appearance: textfield;
    transition: background-color 0.15s ease, border-color 0.15s ease;
    color: $color-gray-darkest;

    &:focus,
    &:hover {
      outline: 0;
      border-color: $color-gray;
    }

    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration,
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  textarea#{$block-name} {
    &__input {
      height: $tappable-element-xl;
      min-height: $tappable-element-xl;
      resize: vertical;
    }
  }

  &__footer {
    margin-top: $space-xxxs;

    &:empty {
      display: none;
    }
  }

  &--error {
    #{$block-name} {
      &__input {
        border-color: $color-danger;
      }
    }
  }

  &--textarea {
    #{$block-name} {
      &__append,
      &__prepend {
        align-items: flex-start;
      }
    }
  }

  &--disabled {
    #{$block-name} {
      &__input {
        cursor: not-allowed;
        background-color: $color-gray-lightest;
        border-color: $color-gray-lightest;
      }
    }
  }

  &--borderless {
    #{$block-name} {
      &__input {
        border: none;
      }
    }
  }

  &--radiusless {
    #{$block-name} {
      &__input {
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
      }
    }
  }
}
</style>

<docs>
    ```jsx

   let inputText1= null
   let inputText2= null
   let inputText3= null
   let inputText4= null
   let inputText5= null
   let inputText6= null
   let inputText7= null
   let inputText8= null
    <div style="max-width: 700px">
      <ElFieldText
              name="login1"
              title="Лейбл"
              help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
              v-model="inputText1"
      >
      </ElFieldText>

      <ElFieldText
              name="login2"
              title="Лейбл"
              help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
              :errors="['Имя пользователя и пароль не совпадают', 'Поле обязательно для заполнения.']"
              v-model="inputText2"
      >
        <ElSvgIcon slot="append" name="direction"></ElSvgIcon>
      </ElFieldText>

      <ElFieldText name="login3" title="Лейбл" disabled="" v-model="inputText3"> </ElFieldText>

      <div style="display: flex; background-color: #333; padding: 15px;">
        <div style="width: 33%; border-right: 1px solid gray;">
          <ElFieldText name="login4" title="Лейбл1" v-model="inputText4" borderless radiusless>
          </ElFieldText>
        </div>
        <div style="width: 33%; border-right: 1px solid gray;">
          <ElFieldText name="login5" title="Лейбл" v-model="inputText5" borderless radiusless>
          </ElFieldText>
        </div>
        <div style="width: 33%;">
          <ElFieldText name="login6" title="Лейбл" v-model="inputText6" borderless radiusless>
          </ElFieldText>
        </div>
      </div>

      <div style="width: 700px; padding: 15px;">
        <ElFieldText
                name="Textarea"
                title="Лейбл7"
                type="textarea"
                help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
                v-model="inputText7"
        >
        </ElFieldText>

        <ElFieldText name="datePicker" title="Лейбл8" type="date" v-model="inputText8"> </ElFieldText>
      </div>
    </div>
    ```
</docs>
