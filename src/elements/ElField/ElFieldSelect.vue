<template>
  <div class="el-field-select" :class="classes">
    <div :for="name" class="el-field-select__header">
      <slot name="header">
        <ElTitle
          :size="titleSize"
          :line-height="titleLineHeight"
          :ellipsis="false"
          v-if="title"
          color="gray"
        >
          {{ title }}
        </ElTitle>
      </slot>
    </div>
    <div class="el-field-select__main">
      <multiselect
        :value="_value"
        :options="options"
        label="name"
        track-by="value"
        :searchable="searchable"
        :show-labels="showLabels"
        placeholder=""
        :multiple="multiple"
        :hide-selected="hideSelected"
        :allow-empty="allowEmpty"
        :open-direction="openDirection"
        :taggable="taggable"
        :tag-placeholder="''"
        :disabled="disabled"
        @input="handleChange"
        @tag="handleTag"
        @search-change="handleSearchChange"
        :internal-search="internalSearch"
        @open="handleOpen"
        @close="handleClose"
      >
        <span slot="noResult">Ничего не найдено</span>
      </multiselect>
    </div>
    <div v-if="icon" class="el-field-select__icon" @click="handleChangeDirection">
      <el-svg-icon name="direction" />
    </div>
    <div class="el-field-select__footer" v-if="!disableFooter">
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
      <slot name="footer">
        <ElTitle tag-name="div" :ellipsis="false" line-height="xxxs" size="xxxs" v-if="helpText">{{
          helpText
        }}</ElTitle>
      </slot>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect"
import "vue-multiselect/dist/vue-multiselect.min.css"
import ElTitle from "../ElTitle"
import ElSvgIcon from "../ElSvgIcon"
export default {
  name: "ElFieldSelect",
  components: { ElTitle, Multiselect, ElSvgIcon },

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
     *  Вспомогательный текст под инпутом:
     *
     */
    helpText: {
      type: String,
      default: null,
    },

    options: {
      type: Array,
      required: true,
    },

    searchable: {
      type: Boolean,
      default: true,
    },

    multiple: {
      type: Boolean,
      default: false,
    },

    hideSelected: {
      type: Boolean,
      default: false,
    },

    allowEmpty: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    backgroundColor: {
      type: String,
      default: null,
    },

    openDirection: {
      type: String,
      default: "bottom",
    },

    taggable: {
      type: Boolean,
      default: false,
    },

    showLabels: {
      type: Boolean,
      default: false,
    },

    internalSearch: {
      type: Boolean,
      default: true,
    },

    disableFooter: {
      type: Boolean,
      default: false,
    },

    value: {
      default: null,
    },

    errors: {
      type: [Array, Object],
      default: null,
    },

    name: {
      type: String,
      default: null,
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
     *  Без стрелки
     *
     */
    arrowDisabled: {
      type: Boolean,
      default: false,
    },

    /**
     *  Иконка стрелок
     *
     */
    icon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputFocused: false,
    }
  },
  computed: {
    classes() {
      return {
        "el-field-select--error": this.errorText,
        "el-field-select--disabled": this.disabled,
        "el-field-select--focused": this.inputFocused,
        "el-field-select--borderless": this.borderless,
        "el-field-select--radiusless": this.radiusless,
        "el-field-select--arrow-disabled": this.arrowDisabled,
        [`el-field-select--bg-${this.backgroundColor}`]: this.backgroundColor,
      }
    },

    titleSize() {
      return this.inputFocused ? "xxxs" : "s"
    },

    titleLineHeight() {
      return this.inputFocused ? "xxs" : "s"
    },

    _value() {
      if (this.multiple) {
        if (this.value == null) return []
        let result = []
        for (let value of this.value) {
          let option = this.options.find(o => o.value == value)
          if (option != null) result.push(option)
        }
        return result
      }
      return this.options.find(o => o.value == this.value)
    },

    errorText() {
      if (this.errors == null || this.errors.length === 0) return null
      if (typeof this.errors === "object") return Object.values(this.errors)[0]
      return this.errors.join(", ")
    },
  },
  methods: {
    handleChangeDirection() {
      if (this.disabled) return
      this.$emit("handleChangeDirection")
    },
    handleChange(value) {
      this.$emit("original-input", value)
      if (value != null) {
        if (this.multiple) {
          value = value.map(v => v.value)
        } else {
          value = value.value
        }
      }
      this.emitInput(value)
    },

    handleTag(value) {
      this.$emit("tag", value)
    },

    handleOpen() {
      this.inputFocused = true
    },

    handleClose() {
      if (this.value !== null && this.value.length !== 0) {
        return
      }
      this.inputFocused = false
    },

    handleSearchChange(value) {
      this.$emit("search-change", value)
    },

    emitInput(value) {
      this.$emit("input", value)
    },

    checkValue() {
      if (this.value !== null && this.value.length !== 0) {
        this.inputFocused = true
      }
    },
  },

  created() {
    this.checkValue()
  },

  watch: {
    value() {
      if (this.value !== null && this.value.length !== 0) {
        this.inputFocused = true
      }
    },
  },
}
</script>

<style lang="scss">
$colors: $token-colors;

.el-field-select {
  $block-name: &;
  position: relative;

  @include custom-scroll();
  font-family: $font-regular;

  &--focused {
    & #{$block-name} {
      &__header {
        top: $space-xxs;
      }
    }
  }

  &__main {
    background-color: $color-white;
    border-radius: 3px;
  }

  &__header {
    @include reset-text-indents();
    display: block;
    position: absolute;
    left: $space-xs;
    top: $space-xs;
    pointer-events: none;
    transition: all 0.15s ease;
  }

  &__footer {
    margin-top: $space-xxxs;

    &:empty {
      display: none;
    }
  }

  .multiselect {
    &__single {
      padding-left: 0;
      background-color: transparent;
      margin-bottom: 0;
      font-size: $size-s;
      padding-top: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__input {
    }

    &__select {
      height: $tappable-element-m - 2px;
      top: $space-xxs + 2px;
      &::before {
        border-color: $color-gray-dark transparent transparent;
      }
    }

    &__tags {
      @include reset-text-indents();
      border: 1px solid $color-gray-light;
      border-radius: $radius-s - 1 !important;
      padding: $space_s + 2 $space-xl $space-xxs $space-xs;
      background-color: transparent;
      height: 60px;
      cursor: pointer;

      &:hover {
        border-color: $color-gray;
      }

      & input {
        padding: 0 !important;
      }
    }

    &__tags-wrap {
      padding-bottom: $space-xxxs;
      position: relative;
      top: $space-xxxs - 1;
      display: flex;
      flex-wrap: wrap;
      margin-top: -$space-xxxs + 1;
      min-height: $tappable-element-m - 4px;
      margin-left: -$space-xs;
    }

    &__tag {
      font-family: $font-regular;
      margin-top: $space-xxxs;
      background-color: fade-out($color-main, 0.9);
      color: $color-gray-darker;
      display: inline-flex;
      align-items: center;
      padding: $space-xxxs $space-xs;
      padding-left: $space-m / 2;
      border-radius: $radius-xxl;
      font-size: $size-m - 1;
      height: $tappable-element-s;
      margin-bottom: $space-xxxs;
      margin-right: $space-xxs - 1;

      span {
        @include ellipsis();
        flex: 1 1 auto;
      }
    }

    &__tag-icon {
      @include size($tappable_element_xxs + 2);
      position: relative;
      background-color: $color-main;
      border-radius: $radius-circle;
      flex: 0 0 auto;

      &:hover {
        background-color: $color-danger;
      }

      &::after {
        @include size($space-xs);
        position: absolute;
        color: #e0eeff;
        left: $space-xxs + 1;
        top: -$space-xxxs;
      }
    }

    &__content {
      max-width: 100%;
      font-size: $size-s;
      line-height: $line-height-s;
    }

    &__content-wrapper {
      top: calc(100% - 1px);
      width: calc(100% + 1px);
      border: 1px solid $color-gray-light;
      border-radius: 0 0 3px 3px;
      box-shadow: $shadow-s;
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 20;
    }

    &__option {
      min-height: $tappable-element-l;
      display: flex;
      align-items: center;
      padding: $space-xs;

      span {
        @include ellipsis();
      }

      &--highlight {
        background-color: $color-gray-lightest;
        color: $color-gray-darker;
      }
    }

    &--active {
      .multiselect {
        &__tags {
          border-color: $color-gray-light;
        }
      }
    }
  }

  @each $color, $value in $token-colors {
    &--bg-#{$color} {
      .multiselect {
        &__tags {
          background-color: fade-out($value, 0.6);
          border-color: transparent;
        }

        //&__option {
        //
        //    &--highlight {
        //        background-color: fade-out($value, 0.8);
        //        color: $text-color;
        //
        //        &::after {
        //            background-color: fade-out($value, 0.8);
        //        }
        //
        //        &:active {
        //            background-color: darken(fade-out($value, 0.6), 7%);
        //        }
        //    }
        //
        //    &--selected {
        //        background-color: fade-out($value, 0.7);
        //        color: $text-color;
        //        font-weight: 400;
        //
        //        &:hover,
        //        &:focus {
        //            background-color: darken(fade-out($value, 0.7), 3%);
        //        }
        //
        //        &:active {
        //            background-color: darken(fade-out($value, 0.7), 7%);
        //        }
        //
        //        &.multiselect {
        //
        //            &__option {
        //
        //                &--highlight {
        //                    background-color: fade-out($value, 0.8);
        //                    color: $text-color;
        //                    font-weight: 400;
        //
        //                    &:hover,
        //                    &:focus {
        //                        background-color: darken(fade-out($value, 0.6), 3%);
        //                    }
        //
        //                    &:active {
        //                        background-color: darken(fade-out($value, 0.6), 7%);
        //                    }
        //                }
        //            }
        //        }
        //
        //    }
        //}

        &--active {
          .multiselect {
            &__tags {
              border-color: $value;
            }
          }
        }
      }

      &#{$block-name}--disabled {
        .multiselect--disabled {
          .multiselect {
            &__tags {
              border-color: transparent !important;
              background-color: fade-out($value, 0.6);
            }

            &__select {
              &::before {
                border-color: $color-gray-dark transparent transparent;
              }
            }
          }
        }
      }
    }
  }

  &--error {
    .multiselect {
      &__tags {
        border-color: $color-main !important;
      }
    }
  }

  &--disabled {
    #{$block-name}__header {
      z-index: 1;
    }
    #{$block-name}__icon {
      pointer-events: none;
    }
    .multiselect--disabled {
      opacity: 1;
      background: transparent;
      .multiselect {
        &__tags {
          border-color: $color-gray-lightest !important;
          background-color: $color-gray-lightest;
        }

        &__select {
          background-color: transparent;

          &::before {
            border-color: $color-gray-light transparent transparent;
          }
        }
      }
    }
  }

  &--borderless {
    .multiselect {
      &__tags {
        border: none !important;
      }
    }
  }

  &--radiusless {
    & #{$block-name}__main {
      border-radius: 0 !important;
    }
  }

  &--arrow-disabled {
    .multiselect {
      &__select {
        display: none !important;
      }
    }
  }

  &__icon {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 50;
    &:hover {
      color: $color-main;
    }
  }
}
</style>

<docs>
  ```jsx
  let categories = require('../../mocks/categories').default
  let categoriesModel = []
  let categoriesModel2 = []
  let categoriesModel3 = []
  let categoriesModel4 = 4
  <div style="max-width: 400px">
    <ElFieldSelect
            title="Multiple"
            :allow-empty="true"
            :multiple="true"
            :hide-selected="true"
            v-model="categoriesModel"
            :options="categories.map(c => ({ name: c.title, value: c.id }))"
            :errors="['Имя пользователя и пароль не совпадают', 'Поле обязательно для заполнения.']"
    />

    <br>
    <ElFieldSelect
            help-text="Используйте электронный адрес, указанный при регистрации аккаунта MediaCube."
            title="Single"
            borderless
            radiusless
            :allow-empty="true"
            :multiple="false"
            v-model="categoriesModel2"
            :options="categories.map(c => ({ name: c.title, value: c.id }))"/>

    <br>
    <ElFieldSelect
            disabled
            title="Disabled"
            :allow-empty="true"
            :multiple="false"
            v-model="categoriesModel3"
            :options="categories.map(c => ({ name: c.title, value: c.id }))"/>
    <br>
    <ElFieldSelect
            background-color="dodger-blue-lighten"
            title="Цветной"
            v-model="categoriesModel4"
            :options="categories.map(c => ({ name: c.title, value: c.id }))"
            :searchable="false"
            arrow-disabled
            icon
    />
  </div>
  ```
</docs>
