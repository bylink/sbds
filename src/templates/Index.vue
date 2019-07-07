<template>
  <div>
    <ElTitle size="xxl" ellipsis
      >Минск — Мозыр Оформление заказа Минск — Мозыр Оформление заказа Минск — Мозыр Оформление
      зака</ElTitle
    >

    <ElSeparator indentTop="s" indentBottom="s" />

    <ElTitle size="xxs" color="danger">
      <ElSvgIcon slot="icon-prepend" name="checkbox-arrow"></ElSvgIcon>
      Промокод применен!
    </ElTitle>

    <ElSeparator indentTop="xxl" indentBottom="xxl" />

    <ElTitle size="m" color="success" uppercase>
      <ElSvgIcon slot="icon-append" name="clock"></ElSvgIcon>
      Промокод применен!
    </ElTitle>

    <ElSeparator indentTop="l" indentBottom="l" />

    <ElTitle size="m">Кнопки main</ElTitle>

    <ElButton size="l" disabled>Кнопка L</ElButton>
    <ElButton>Кнопка M</ElButton>
    <ElButton size="s">Кнопка S</ElButton>
    <ElButton size="l" radius="none">Кнопка</ElButton>
    <ElButton size="l" fullWidth>Кнопка</ElButton>

    <ElTitle size="m">Кнопки main-outline</ElTitle>

    <ElButton size="l" disabled variation="main-outline">Кнопка L</ElButton>
    <ElButton variation="main-outline">Кнопка M</ElButton>
    <ElButton size="s" variation="main-outline">Кнопка S</ElButton>

    <ElButton size="s" variation="gray-light-small">Применить</ElButton>

    <div
      style="width: 200px;height: 60px;background-color: #333;display: flex;align-items: center;justify-content: center;"
    >
      <ElButton variation="white" size="s">Войти</ElButton>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="display: flex;">
      <ElFieldCheckbox
        main-text="Чекбокс 1"
        title="Заголовок чекбокса 1"
        name="checkbox1"
        help-text="Вспомогательный текст чекбокса."
        :errors="['Ошибка чекбокса 1', 'Ошибка чекбокса 2']"
      >
        <ElTitle tag-name="div" color="gray" :ellipsis="false" line-height="s" size="xs"
          >Чекбокс и ссылочка <a href="#">keke</a></ElTitle
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

    <ElSeparator indentTop="l" indentBottom="l" />
  </div>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
import ElTitle from "../elements/ElTitle"
import ElSeparator from "../elements/ElSeparator"
import ElButton from "../elements/ElButton"
import ElFieldCheckbox from "../elements/ElFieldCheckbox"

export default {
  name: "Index",
  components: {
    ElTitle,
    ElSvgIcon,
    ElSeparator,
    ElButton,
    ElFieldCheckbox,
  },
  props: {},
  data() {
    return {
      checkedRadio: true,
    }
  },
}
</script>

<style lang="scss" scoped></style>
