<template>
  <div class="el-field-checkbox" :class="classes">
    <div class="el-field-checkbox__header">
      <slot name="header">
        <ElTitle :ellipsis="false" v-if="title" :level="4">{{ title }}</ElTitle>
      </slot>
    </div>
    <div class="el-field-checkbox__input-wrap">
      <label class="el-field-checkbox__name">
        <input
          :disabled="disabled"
          class="el-field-checkbox__input"
          :type="type"
          :name="name"
          :checked="value === checkedValue"
          @change="handleChange"
        />
        <span class="el-field-checkbox__name-text">
          <slot>
            <ElTitle tag-name="div" :ellipsis="false" line-height="s" size="xs" v-if="mainText">
              {{ mainText }}
            </ElTitle>
          </slot>
        </span>
      </label>
      <div class="el-field-checkbox__footer">
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
          <ElTitle tag-name="div" :ellipsis="false" line-height="xxxs" size="xxxs" v-if="helpText">
            {{ helpText }}
          </ElTitle>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import ElSeparator from "../ElSeparator"
import ElTitle from "../ElTitle"
import ElLink from "../ElLink"
export default {
  name: "ElFieldCheckbox",
  components: { ElTitle, ElSeparator, ElLink },
  props: {
    /**
     *  Тип: чекбокс или радио
     *
     */
    type: {
      type: String,
      default: "checkbox",
    },
    /**
     *  Значение
     *
     */
    value: {
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

    /**
     *  Выбранное значение
     *
     */
    checkedValue: {
      default: true,
    },

    /**
     *  Невыбранное значение
     *
     */
    uncheckedValue: {
      default: false,
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
     *  Плейсхолдер
     *
     */
    placeholder: {
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

    /**
     *  Подпись чекбокса:
     *
     */
    mainText: {
      type: String,
      default: null,
    },

    /**
     *  Заголовок поля:
     *
     */
    title: {
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
  },

  computed: {
    classes() {
      return {
        "el-field-checkbox--error": this.errors,
        "el-field-checkbox--disabled": this.disabled,
        [`el-field-checkbox__type-${this.type}`]: this.type,
      }
    },
    errorText() {
      if (this.errors == null || this.errors.length === 0) return null
      return this.errors.join(", ")
    },
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.checked ? this.checkedValue : this.uncheckedValue)
    },
  },
}
</script>

<style lang="scss">
.el-field-checkbox {
  display: block;

  $block-name: &;

  &__input-wrap {
    & + & {
      margin-top: $space-xs;
    }
  }

  &__name {
    display: inline-block;
    position: relative;
    padding-left: $space-m;
    margin-right: $space-xs;

    &:hover {
      cursor: pointer;
    }
  }

  &__input {
    display: none;
  }

  &__type-checkbox {
    & #{$block-name} {
      &__name {
        &-text {
          &:before {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgcng9IjIuNSIgc3Ryb2tlPSIjQzFDMUMxIi8+Cjwvc3ZnPgo=");
          }
        }

        & input:hover ~ #{$block-name}__name-text:before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgcng9IjIuNSIgc3Ryb2tlPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo=");
        }

        & input:checked ~ #{$block-name}__name-text:before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMyIgZmlsbD0iI0ZGNzIwMCIvPgo8cGF0aCBkPSJNNC40NDUyNCAxMi4zNDMxQzQuODM1NzYgMTEuOTUyNiA1LjQ2ODkzIDExLjk1MjYgNS44NTk0NSAxMi4zNDMxTDkuNzU4OTUgMTYuMjQyNkMxMC4xNDk1IDE2LjYzMzEgMTAuMTQ5NSAxNy4yNjYzIDkuNzU4OTUgMTcuNjU2OEM5LjM2ODQyIDE4LjA0NzQgOC43MzUyNiAxOC4wNDc0IDguMzQ0NzMgMTcuNjU2OEw0LjQ0NTI0IDEzLjc1NzNDNC4wNTQ3MSAxMy4zNjY4IDQuMDU0NzEgMTIuNzMzNiA0LjQ0NTI0IDEyLjM0MzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTkuNjU3MyA2LjM0MzEzQzE5LjI2NjggNS45NTI2IDE4LjYzMzYgNS45NTI2IDE4LjI0MzEgNi4zNDMxM0w4LjM0MzU5IDE2LjI0MjZDNy45NTMwNyAxNi42MzMxIDcuOTUzMDcgMTcuMjY2MyA4LjM0MzU5IDE3LjY1NjhDOC43MzQxMiAxOC4wNDc0IDkuMzY3MjggMTguMDQ3NCA5Ljc1NzgxIDE3LjY1NjhMMTkuNjU3MyA3Ljc1NzM0QzIwLjA0NzggNy4zNjY4MSAyMC4wNDc4IDYuNzMzNjUgMTkuNjU3MyA2LjM0MzEzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
        }
      }
    }
  }

  &__type-radio {
    & #{$block-name} {
      &__name {
        &-text:before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEuNSIgc3Ryb2tlPSIjQzFDMUMxIi8+Cjwvc3ZnPgo=");
        }

        & input:hover ~ #{$block-name}__name-text:before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEuNSIgc3Ryb2tlPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo=");
        }

        & input:checked ~ #{$block-name}__name-text:before {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNGRjcyMDAiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
        }
      }
    }
  }

  &__footer {
    padding-left: $space-m;
    margin-top: $space-nano;
    &:empty {
      display: none;
    }
  }

  &--disabled {
    #{$block-name} {
      &__name-text {
        &:before {
          background-image: none !important;
          border-radius: $radius-s;
          background-color: $color-gray-lighten;
        }
      }
    }

    &:hover {
      #{$block-name} {
        &__name-text {
          &:before {
            background-image: none !important;
          }
        }

        &__name {
          cursor: default;
        }
      }
    }

    &#{$block-name}__type-radio {
      #{$block-name} {
        &__name-text {
          &:before {
            border-radius: $radius-circle;
          }
        }
      }
    }
  }

  &__name-text {
    display: inline-flex;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: $tappable-element-xs;
      height: $tappable-element-xs;
      background-size: 100%;
    }
  }
}
</style>

<docs>
  ```jsx
  let toggler = null
  let toggler2 = null
  let checkedRadio = true
  <div>
    <div style="display: flex;">
      <ElFieldCheckbox
              main-text="Чекбокс 1"
              title="Заголовок чекбокса 1"
              name="checkbox1"
              help-text="Вспомогательный текст чекбокса."
              :errors="['Ошибка чекбокса 1', 'Ошибка чекбокса 2']"
      >
        <ElTitle tag-name="div" color="gray" :ellipsis="false" line-height="s" size="xs"
        >Чекбокс и ссылочка <ElLink href="#" size="xs" border="solid">Ссылочка</ElLink></ElTitle
        >
      </ElFieldCheckbox>

      <ElFieldCheckbox
              main-text="Чекбокс 2"
              title="Заголовок чекбокса 2"
              name="checkbox2"
              help-text="Вспомогательный текст чекбокса."
              :errors="['Ошибка чекбокса 3', 'Ошибка чекбокса 4']"
      >
        <ElTitle tag-name="div" color="gray" :ellipsis="false" line-height="s" size="xs"
        >Чекбокс и ссылочка <a href="#">keke</a></ElTitle
        >
      </ElFieldCheckbox>

      <ElFieldCheckbox
              main-text="Задизейбленный чекбокс"
              disabled
              title="Заголовок чекбокса 3"
              name="checkbox3"
      >
      </ElFieldCheckbox>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="display: flex;">
      <ElFieldCheckbox
              type="radio"
              :value="checkedRadio"
              main-text="Радио 1"
              title="Заголовок Радио 1"
              name="radio"
              help-text="Вспомогательный текст radio."
              :errors="['Ошибка radio 1', 'Ошибка radio 2']"
      >
      </ElFieldCheckbox>

      <ElFieldCheckbox
              type="radio"
              main-text="Радио 2"
              title="Заголовок радио 2"
              name="radio"
              help-text="Вспомогательный текст radio."
              :errors="['Ошибка radio 3', 'Ошибка radio 4']"
      >
      </ElFieldCheckbox>

      <ElFieldCheckbox
              type="radio"
              disabled
              main-text="Задизейбленный радио 3"
              title="Заголовок радио 3"
              name="radio"
              help-text="Вспомогательный текст radio."
              :errors="['Ошибка radio 3', 'Ошибка radio 4']"
      >
      </ElFieldCheckbox>
    </div>
  </div>
  ```
</docs>
